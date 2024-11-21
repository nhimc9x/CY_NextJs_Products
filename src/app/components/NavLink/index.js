'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function NavLink({title, href}) {
    const pathname = usePathname()
    return (
        <Link href={href} className={`nav-link-menu ${pathname === href ? 'active' : ''}`}>
            {title}
        </Link>
    )
}