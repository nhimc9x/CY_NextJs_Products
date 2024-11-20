'use client';

import useAuthStore from "@/stores/useAuthStore";

export default function Header() {
    const {user} = useAuthStore()

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-gray-400 shadow-md">
            <div className="wrapper h-full flex items-center text-text-primary justify-between">
                <div className="">Logo</div>
                {user ? (
                    <div>{user.name}</div>
                ) : (
                    <div className="">Login</div>)}
            </div>
        </div>
    )
}
