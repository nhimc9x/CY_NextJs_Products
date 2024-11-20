import ProductCard from "@/app/(shop)/products/components/ProductCard";
import {getProducts} from "@/services/productServices";

export default async function ProductsPage() {
    let products = await getProducts()
    return (
        <div>
            <div className="text-center text-3xl py-8">Products Page</div>
            {!products.data.data.length ? <div className="text-center text-3xl py-8">No products</div> : (
                <div className="px-10 py-16 grid grid-cols-3 gap-6">
                    {products.data.data.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
            )}

        </div>
    )
}
