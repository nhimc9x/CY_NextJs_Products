import {useState} from "react";

export default function OrderItemCard({orderData}) {

    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className="flex flex-wrap items-center gap-y-4 py-6 border-b border-gray-200">
            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900">
                    <div className="hover:underline">#{orderData.id}</div>
                </dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500">Date:</dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900">21/11/2024</dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500">Price:</dt>
                <dd className="mt-1.5 text-base font-semibold text-primary">${orderData.total}</dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500">Status:</dt>
                <dd className="me-2 mt-1.5 gap-3 inline-flex items-center rounded bg-primary-light text-primary px-2.5 py-1 text-xs font-medium">
                    <div
                        className="size-3 border-[2px] border-gray-200 rounded-full border-t-primary animate-spin"></div>
                    <div className="">{orderData.status}</div>
                </dd>
            </dl>

            <button onClick={() => setShowDetails(!showDetails)}>
                show details
            </button>

            {
                showDetails && (
                    <div className="w-full bg-gray-50 rounded-md text-gray-500">
                        {orderData.order_items.map(item =>
                            <div key={item.id} className="grid grid-cols-5 items-center gap-4 p-4">
                                <div className="lg:col-span-2 col-span-5">{item.name}</div>
                                <div className="text-text-primary">$ {item.price}</div>
                                <div className="text-text-primary">x {item.quantity}</div>
                                <div
                                    className="font-semibold text-primary/70 lg:col-span-1 col-span-3 text-left lg:text-right">$ {item.total}</div>
                            </div>
                        )}
                    </div>
                )
            }

        </div>
    )
}