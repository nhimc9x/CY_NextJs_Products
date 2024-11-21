"use client";

import {useEffect, useState} from "react";
import {getOrders} from "@/services/productServices";
import OrderItemCard from "@/app/(shop)/orders/components/OrderItemCard";

export default function OrdersPage() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const res = await getOrders()
                console.log(res)
                setOrders(res.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])


    return (
        <>
            <div className="">Orders</div>
            <div className="my-10">
                {
                    orders?.map(order => <OrderItemCard key={order.id} orderData={order}/>)
                }
            </div>

        </>
    )
}