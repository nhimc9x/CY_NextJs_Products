"use client"

import InputForm from "@/app/(auth)/components/InputForm";
import {useEffect, useState} from "react";
import useCartStore from "@/stores/useCartStore";
import {checkout} from "@/services/productServices";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter()
    const {cart, getTotalPrice} = useCartStore()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(getTotalPrice());
    }, [cart, getTotalPrice]);

    const handleCheckout = async (e) => {
        e.preventDefault()
        const handleCardBeforeCheckout = cart.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
            price: item.price,
            name: item.name,
        }))
        try {
            const res = await checkout(name, phone, handleCardBeforeCheckout)
            toast.success(res.data.message)
            router.push('/orders')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="">Checkout</div>
            <div className="max-w-[500px] mx-auto my-10 bg-gray-200 rounded-lg p-4">
                <h5 className="text-2xl my-4 font-semibold text-text-primary">Bill</h5>
                <div className="flex justify-between items-center">
                    <div className="text-gray-400 font-medium uppercase text-sm">Subtotal</div>
                    <div className="text-gray-900 font-semibold text-xl">${totalPrice}</div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="text-gray-400 font-medium uppercase text-sm">Shipping</div>
                    <div className="text-gray-900 font-semibold text-xl">$0</div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="text-gray-400 font-medium uppercase text-sm">Tax</div>
                    <div className="text-gray-900 font-semibold text-xl">$0</div>
                </div>
            </div>
            <form onSubmit={handleCheckout}>
                <InputForm required value={name} setValue={setName} placeholder="Enter your name"/>
                <InputForm required value={phone} setValue={setPhone} placeholder="Enter your phone number" type="tel"/>
                <button className="rounded-full w-full bg-red-500 flex-shrink-0 size-10 p-2.5 group flex items-center justify-center
                    hover:bg-red-200">
                    Checkout
                </button>
            </form>
        </>
    )
}