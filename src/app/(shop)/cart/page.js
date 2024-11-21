"use client"

import CartItem from "@/app/(shop)/cart/components/CartItem";
import useCartStore from "@/stores/useCartStore";
import Link from "next/link";

export default function CartPage() {

    const {cart} = useCartStore()

    return (
        <>
            <div className="">Cart</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cart.map(item => (
                    <CartItem key={item.id} cartData={item}/>
                ))}
            </div>
            <Link href={'/checkout'}>
                <button
                    className="rounded-full w-full bg-red-500 flex-shrink-0 size-10 p-2.5 group flex items-center justify-center
                    hover:bg-red-200">
                    Checkout
                </button>
            </Link>
        </>
    )
}