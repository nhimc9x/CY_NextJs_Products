'use client';

import useAuthStore from "@/stores/useAuthStore";
import {useEffect} from "react";
import {checkAuth} from "@/services/authServices";
import Link from "next/link";

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
        <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-gray-400 shadow-md">
            <div className="wrapper h-full flex items-center text-text-primary justify-between">
                <div className="">Logo</div>
                {user ? (
                    <div>{user.name}</div>
                ) : (
                    <Link href='/login' className="">Login</Link>)}
            </div>
        </div>
    )
}
