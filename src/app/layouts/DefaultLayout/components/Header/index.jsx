'use client';

import useAuthStore from "@/stores/useAuthStore";
import {useEffect} from "react";
import {checkAuth} from "@/services/authServices";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";

export default function Header() {
    const {user, token, setUser} = useAuthStore()

    useEffect(() => {
        if (token) {
            (async () => {
                const res = await checkAuth()
                setUser(res.data)
            })()
        }
    }, [token, setUser]);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-secondary/70 backdrop-blur-2xl shadow-md">
            <div className="wrapper h-full flex items-center justify-between text-gray-200">
                <Link href={'/'} className="text-2xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-tl from-primary from-30% via-holographic to-secondary">BlackShop</Link>
                <div className="flex items-center gap-6">
                    <NavLink title={'Home'} href={'/'}/>
                    <NavLink title={'Products'} href={'/products'}/>
                    <NavLink title={'Cart'} href={'/cart'}/>
                    <NavLink title={'Orders'} href={'/orders'}/>
                </div>
                {user ? (
                    <div>{user.name}</div>
                ) : (
                    <Link href='/login' className="">Login</Link>)}
            </div>
        </div>
    )
}
