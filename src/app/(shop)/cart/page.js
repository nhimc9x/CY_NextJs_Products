"use client"

import CartItem from "@/app/(shop)/cart/components/CartItem";
import useCartStore from "@/stores/useCartStore";
import Link from "next/link";
import {useAutoAnimate} from '@formkit/auto-animate/react'
import formatMoney from "@/utils/formatMoney";

export default function CartPage() {

    const {cart, getTotalPrice} = useCartStore()
    
    const [parent, enableAnimations] = useAutoAnimate({
        duration: 400,
        easing: 'ease-in-out',
    })

    if (!cart.length) return <div className="text-center text-holographic min-h-[400px] grid place-content-center text-3xl py-8">Your cart is empty</div>

    return (
        <div className='px-4 py-10'>
            <div ref={parent} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {cart.map(item => (
                    <CartItem key={item.id} cartData={item}/>
                ))}
            </div>

            <div
                className="flex md:items-center md:justify-between lg:px-6 pb-6 pt-10 border-b border-gray-600">
                <div
                    className="text-holographic font-semibold text-2xl leading-9 w-full text-left">
                    Total
                </div>
                <div className="font-bold text-2xl text-primary tracking-wider">{formatMoney(getTotalPrice())}</div>
            </div>
            <div className="mb-10">
                <p className="font-normal text-base leading-7 text-gray-300 text-center my-5">
                    Shipping taxes, and discounts calculated at checkout
                </p>
                <Link href={'/checkout'}>
                    <button
                        className="select-none rounded-lg bg-gradient-to-br from-primary to-blue-500 py-3 w-[80%] mx-auto block text-center align-middle font-sans tracking-widest font-bold uppercase text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}