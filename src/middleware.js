import {NextResponse} from 'next/server'
import {getCookie} from "cookies-next";
// import {getCookieServer} from "@/utils/getCookieServer";

export async function middleware(request) {
    const token = await getCookie('token', { req: request });
    const redirectTo = request.nextUrl.pathname.replace('/', '')
    // const token = await getCookieServer('token')
    if (token) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL(`/login?redirect=${redirectTo}`, request.url))
}

export const config = {
    matcher: ['/cart', '/checkout', '/orders', '/products/:path*'],
}
