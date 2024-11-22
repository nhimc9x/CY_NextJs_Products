"use client";

import {useEffect, useState} from "react";
import {getOrders} from "@/services/productServices";
import OrderItemCard from "@/app/(shop)/orders/components/OrderItemCard";

export default function OrdersPage() {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const res = await getOrders()
                console.log(res)
                setOrders(res.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })()
    }, [])

    if (loading) return <div className="text-center text-holographic min-h-[400px] grid place-content-center text-3xl py-8">Loading...</div>

    return (
        <>
            <div className="py-10 px-4">
                {
                    orders?.length === 0 ? <div
                            className="text-center text-holographic min-h-[400px] grid place-content-center text-3xl py-8">Your
                            orders is empty</div> :
                        orders?.map(order => <OrderItemCard key={order.id} orderData={order}/>)

                }
            </div>

        </>
    )
}