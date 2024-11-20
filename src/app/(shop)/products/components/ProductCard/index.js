export default function ProductCard({product}) {
    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md py-4 border border-gray-100">
            <div className="relative mx-4 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-xl line-clamp-2 font-semibold tracking-normal text-blue-gray-900">
                    {product.name}
                </h5>
                <div className="flex justify-between items-center">
                    <div className="">x{product.stock}</div>
                    <div className="">${product.price}</div>
                </div>
            </div>
            <div className="p-6 pt-0">
                <button type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Add to card
                </button>
            </div>
        </div>
    )
}