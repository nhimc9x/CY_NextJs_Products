'use client';

import useAuthStore from "@/stores/useAuthStore";
import {useEffect, useState} from "react";
import {checkAuth, logout} from "@/services/authServices";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import {FaRegCircleUser} from "react-icons/fa6";
import {RiLogoutCircleLine} from "react-icons/ri";
import useCartStore from "@/stores/useCartStore";
import {deleteCookie} from "cookies-next/client";
import {useRouter} from "next/navigation";

export default function Header() {
    const {user, token, setUser, clearStore} = useAuthStore()
    const {clearCart} = useCartStore()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (token) {
            (async () => {
                setIsLoading(true)
                const res = await checkAuth()
                setUser(res.data)
                setIsLoading(false)
            })()
        } else {
            setIsLoading(false)
        }
    }, [token, setUser]);

    const handleLogout = async () => {
        try {
            await logout()
            clearStore()
            clearCart()
            deleteCookie('token')
            router.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-secondary/70 backdrop-blur-2xl shadow-md">
            <div className="wrapper h-full flex items-center justify-between text-gray-200">
                <Link href={'/'}
                      className="text-2xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-tl from-primary from-30% via-holographic to-secondary">BlackShop</Link>
                <div className="flex items-center gap-6">
                    <NavLink title={'Home'} href={'/'}/>
                    <NavLink title={'Products'} href={'/products'}/>
                    <NavLink title={'Cart'} href={'/cart'}/>
                    <NavLink title={'Orders'} href={'/orders'}/>
                </div>
                {
                    isLoading ? <div
                            className="size-6 mx-6 rounded-full border-2 border-gray-200/10 animate-spin border-t-primary"></div> :
                        user ? (
                            <div className="flex items-center gap-2 relative text-holographic group">
                                <FaRegCircleUser className='size-6'/>
                                <div>{user.name}</div>
                                <div
                                    className="absolute hidden cursor-pointer group-hover:block top-full left-1/2 -translate-x-1/2 rounded bg-text-primary">
                                    <div
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 px-4 py-2">
                                        <RiLogoutCircleLine/>
                                        <div className="">Logout</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link href='/login'
                                  className="bg-gradient-to-br shadow hover:shadow-md hover:to-90% hover:shadow-pink-400 duration-300 shadow-pink-400 to-60% from-primary to-secondary px-4 py-1 rounded tracking-wider">Login</Link>
                        )}
            </div>
        </div>
    )
}
