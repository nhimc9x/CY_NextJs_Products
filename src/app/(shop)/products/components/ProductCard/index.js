"use client"

import useCartStore from "@/stores/useCartStore"
import formatMoney from "@/utils/formatMoney";

export default function ProductCard({product}) {

    const addToCart = useCartStore((state) => state?.addToCart)
    const quantity = useCartStore(
        (state) => state?.cart.find((item) => item.id === product.id)?.quantity || 0
    )

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
            image: product.preview_img_path,
            quantity: 1,
        })
    }

    return (
        <div
            className="flex flex-col rounded-xl bg-gradient-to-br from-text-primary to-transparent bg-clip-border shadow-md py-4 text-holographic">
            <div className="h-60 px-4">
                <img
                    src={product.preview_img_path}
                    alt='product img'
                    className="object-cover w-full h-full rounded-t-xl"
                />
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-xl line-clamp-2 font-semibold tracking-normal">
                    {product.name}
                </h5>
                <div className="flex justify-between items-center">
                    <div className="text-gray-400">x{product.stock}</div>
                    <div className="text-lg font-semibold text-primary tracking-wide">{formatMoney(product.price)}</div>
                </div>
            </div>
            <div className="p-6 pt-0 flex items-center gap-2">
                <button
                    onClick={handleAddToCart}
                    type="button"
                    className="select-none rounded-lg bg-gradient-to-br from-primary to-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Add to card
                </button>
                <div className="text-blue-500">{!quantity ? '' : `x${quantity}`}</div>
            </div>
        </div>
    )
}