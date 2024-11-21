import Link from "next/link";
import {useState} from "react";
import {toast} from "react-toastify";

export default function CartItem({cartData}) {

    const [quantity, setQuantity] = useState(cartData.quantity)

    const handleMinus = () => {
        if (quantity <= 1) return
        setQuantity(quantity - 1)
    }

    const handlePlus = () => {
        if (quantity >= cartData.stock) {
            toast.error('Out of stock')
            return
        }
        setQuantity(quantity + 1)
    }

    return (
        <div
            className="rounded-xl border border-secondary/40 p-4 lg:p-8 grid grid-cols-12 mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
            <div className="col-span-12 lg:col-span-2">
                <img
                    src="https://img.freepik.com/free-vector/realistic-ad-with-product-landing-page_52683-70870.jpg"
                    alt=""
                    className="max-lg:w-full lg:w-[180px] h-full rounded-lg object-cover"
                />
            </div>
            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-semibold text-2xl leading-9 text-left line-clamp-2 text-secondary">{cartData.name}</h5>
                    <button
                        className="rounded-full flex-shrink-0 size-10 p-2.5 group flex items-center justify-center
                    hover:bg-red-200">
                        delete
                        {/*<TrashIcon className="size-full text-[#EF4444]"/>*/}
                    </button>
                </div>
                <div className="flex gap-4 mb-6">
                    <div
                        className="text-gray-400 grid place-content-center border border-secondary rounded-sm px-4 font-medium uppercase text-sm">
                        In Stock: {cartData.stock}<span className="text-secondary"></span></div>
                    <Link href={'/products'}>
                        <button
                            className="max-w-[180px] min-w-[140px] text-base">
                            See details
                        </button>
                    </Link>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleMinus}
                            className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex
                    items-center
                    justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50
                    hover:border-gray-300 focus-within:outline-gray-300">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                 width="18" height="19" viewBox="0 0 18 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <input type="text"
                               readOnly
                               value={quantity}
                               className="border border-gray-300 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-2 bg-gray-200 text-center"
                               placeholder="1"/>
                        <button
                            onClick={handlePlus}
                            className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex
                    items-center
                    justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50
                    hover:border-gray-300 focus-within:outline-gray-300">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                 width="18" height="19" viewBox="0 0 18 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <h6 className="text-secondary font-bold text-xl tracking-wider leading-9 text-right">${cartData.price}</h6>
                </div>
            </div>
        </div>
    )
}