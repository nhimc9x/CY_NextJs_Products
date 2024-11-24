"use client"

import {useEffect, useState} from "react";
import useCartStore from "@/stores/useCartStore";
import {checkout} from "@/services/productServices";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {useAutoAnimate} from '@formkit/auto-animate/react'
import Link from "next/link";
import formatMoney from "@/utils/formatMoney";
import LoadingSpin from "@/app/components/LoadingSpin";

export default function CheckoutPage() {
    const router = useRouter()
    const {cart, clearCart} = useCartStore()
    const totalPrice = useCartStore(state => state?.getTotalPrice())
    const [parent, enableAnimations] = useAutoAnimate()

    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('visa')

    useEffect(() => {
        setLoading(false)
    }, [cart])

    const handleCheckout = async (e) => {
        e.preventDefault()
        const handleCardBeforeCheckout = cart.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
            price: item.price,
            name: item.name,
        }))
        try {
            setLoading(true)
            const res = await checkout(address, phone, handleCardBeforeCheckout)
            router.push('/orders')
            toast.success(res.data.message)
            setLoading(false)
            setTimeout(() => {
                clearCart()
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!loading && !cart.length) {
            router.push('/cart')
        }
    }, [cart, loading])

    if (loading) return (
        <div className="text-center text-holographic min-h-[500px] grid place-content-center text-3xl py-8">
            <LoadingSpin/>
        </div>
    )

    return (
        <div className="text-holographic pb-20">
            <div className="my-10 p-4 lg:max-w-7xl max-w-xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 max-lg:order-1">
                        <form onSubmit={handleCheckout} className="mt-10 max-w-lg">

                            <input value={address} onChange={(e) => setAddress(e.target.value)} required type="text"
                                   placeholder="Address"
                                   className="px-4 bg-text-primary mt-4 py-3.5 w-full text-sm border-b-2 border-gray-500 focus:border-gray-300 text-holographic outline-none"/>

                            <input value={phone} onChange={(e) => setPhone(e.target.value)} required type="text"
                                   placeholder="Phone"
                                   className="px-4 bg-text-primary mt-4 py-3.5 w-full text-sm border-b-2 border-gray-500 focus:border-gray-300 text-holographic outline-none"/>

                            <div className="text-xl mt-8">Payment method</div>

                            <div className="grid gap-4 sm:grid-cols-2 mt-4">
                                <div className="flex items-center">
                                    <input onChange={(e) => setPaymentMethod(e.target.value)} type="radio"
                                           checked={paymentMethod === 'visa'}
                                           className="w-5 h-5 cursor-pointer" id="card" value="visa"
                                           name="checkout-method"/>
                                    <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                        <img src="https://readymadeui.com/images/visa.webp" className="w-12"
                                             alt="card1"/>
                                        <img src="https://readymadeui.com/images/american-express.webp" className="w-12"
                                             alt="card2"/>
                                        <img src="https://readymadeui.com/images/master.webp" className="w-12"
                                             alt="card3"/>
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        checked={paymentMethod === 'paypal'}
                                        type="radio" className="w-5 h-5 cursor-pointer" value="paypal"
                                        name="checkout-method" id="paypal"/>
                                    <label htmlFor='paypal' className="ml-4 flex gap-2 cursor-pointer">
                                        <img src="https://readymadeui.com/images/paypal.webp" className="w-20"
                                             alt="paypalCard"/>
                                    </label>
                                </div>
                            </div>

                            <div ref={parent} className='h-[180px]'>
                                {paymentMethod === 'visa' && (
                                    <div className="grid gap-4 mt-8">
                                        <input type="text" placeholder="Cardholder's Name"
                                               className="px-4 py-3.5 bg-text-primary w-full text-sm border-b-2 border-gray-500 focus:border-gray-300 outline-none"/>
                                        <div
                                            className="flex bg-text-primary border-b-2 border-gray-500 focus-within:border-gray-300 overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 ml-3"
                                                 viewBox="0 0 291.764 291.764">
                                                <path fill="#2394bc"
                                                      d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                                                      data-original="#2394bc"/>
                                                <path fill="#efc75e"
                                                      d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                                                      data-original="#efc75e"/>
                                            </svg>
                                            <input type="number" placeholder="Card Number"
                                                   className="px-4 bg-transparent py-3.5 w-full text-sm outline-none"/>
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'paypal' && (
                                    <div className='mt-8'>
                                        <label
                                            className="flex items-center has-[:checked]:border-blue-600 border-2 gap-4 mt-4 border-gray-200 rounded-md px-4 py-2 cursor-pointer">
                                <span className="w-20">
                                <img
                                    src="https://fm.cnbc.com/applications/cnbc.com/resources/product_select/2024/09/06/Paypal_Debit_Card_2024.png"
                                    className="w-full" alt="card1"/>
                                </span>
                                            <span className="flex flex-col">
                <span className="text-xl font-medium">nhimc9x</span>
                <span className="text-gray-400">********</span>
              </span>
                                            <input type="checkbox" className="w-5 h-5 ml-auto cursor-pointer"/>
                                        </label>
                                        <div
                                            className="bg-blue-200 cursor-pointer text-blue-600 py-2 text-sm w-max mx-auto px-4 rounded-2xl mt-4">+
                                            Add paypal account
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className="flex flex-wrap gap-4 mt-12">
                                <Link href={'/cart'}
                                      className="min-w-[150px] text-center px-6 py-3.5 bg-text-primary/40 hover:bg-text-primary rounded-md">
                                    Back
                                </Link>
                                <button type="submit"
                                        className="min-w-[150px] tracking-widest px-6 py-3.5 bg-gradient-to-br from-primary to-blue-500 text-white rounded-md">
                                    Pay
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        className="bg-text-primary border-4 border-holographic/30 border-dotted min-h-96 w-full  p-6 rounded-md">
                        <h2 className="text-4xl text-gray-200">{formatMoney(totalPrice * 1.1)}</h2>
                        <div className=" mt-8 space-y-4">
                            <div className="flex flex-wrap gap-4 text-sm">Price <span
                                className="ml-auto font-bold">{formatMoney(totalPrice)}</span></div>
                            <div className="flex flex-wrap gap-4 text-sm">Extra Ship<span
                                className="ml-auto font-bold">$0.00</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm">Discount <span
                                className="ml-auto font-bold">0%</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm">Tax <span
                                className="ml-auto font-bold">10%</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">Total <span
                                className="ml-auto">{formatMoney(totalPrice * 1.1)}</span></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}