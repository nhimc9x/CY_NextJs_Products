import {useState} from "react";
import {toast} from "react-toastify";
import {RiDeleteBackFill} from "react-icons/ri";
import formatMoney from "@/utils/formatMoney";
import useCartStore from "@/stores/useCartStore";

export default function CartItem({cartData}) {
    const {plusQuantity, minusQuantity, getQuantity, removeFromCart} = useCartStore()
    const quantity = getQuantity(cartData.id)

    const handleMinus = () => {
        if (quantity <= 1) return
        minusQuantity(cartData.id)
    }

    const handlePlus = () => {
        if (quantity >= cartData.stock) {
            toast.error('Out of stock')
            return
        }
        plusQuantity(cartData.id)
    }

    const handleRemove = () => {
        removeFromCart(cartData.id)
    }

    return (
        <div
            className="rounded-xl bg-text-primary h-max p-10 lg:p-4 grid grid-cols-12 max-lg:max-w-lg max-lg:mx-auto gap-y-4 text-holographic">
            <div className="col-span-12 lg:col-span-4">
                <img
                    src={cartData.image}
                    alt=""
                    className="h-full w-full rounded-lg object-cover"
                />
            </div>
            <div className="col-span-12 lg:col-span-8 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-semibold text-xl leading-9 text-left line-clamp-2 text-holographic">{cartData.name}</h5>
                    <button
                        onClick={handleRemove}
                        className="rounded-full flex-shrink-0 size-12 p-2.5 group flex items-center justify-center
                    hover:bg-holographic">
                        <RiDeleteBackFill className="size-full text-red-500"/>
                    </button>
                </div>
                <div className="flex gap-4 mb-6">
                    <div
                        className="text-gray-400 grid place-content-center border border-gray-500 rounded px-4 py-2 font-medium uppercase text-sm">
                        In Stock: {cartData.stock}<span className="text-secondary"></span></div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleMinus}
                            className="group rounded-[50px] border border-gray-500 shadow-sm shadow-transparent p-2.5 flex
                    items-center
                    justify-center bg-gray-400 transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50
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
                               className="border border-gray-500 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-2 bg-gray-300 text-center"
                               placeholder="1"/>
                        <button
                            onClick={handlePlus}
                            className="group rounded-[50px] border border-gray-600 shadow-sm shadow-transparent p-2.5 flex
                    items-center
                    justify-center bg-gray-400 transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50
                    hover:border-gray-300 focus-within:outline-gray-300">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                 width="18" height="19" viewBox="0 0 18 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <h6 className="text-primary font-bold text-lg tracking-wider leading-9 text-right">{formatMoney(quantity * cartData.price)}</h6>
                </div>
            </div>
        </div>
    )
}