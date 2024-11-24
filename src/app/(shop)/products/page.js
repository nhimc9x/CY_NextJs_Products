import {getProducts} from "@/services/productServices";
import ProductList from "@/app/(shop)/products/components/ProductList";

export default async function ProductsPage({searchParams}) {
    const query = {}
    if (searchParams.name) query.name = searchParams.name
    if (searchParams.min_price) query.min_price = searchParams.min_price
    if (searchParams.max_price) query.max_price = searchParams.max_price
    if (searchParams.category_id) query.category_id = searchParams.category_id

    let products = await getProducts(1, query)

    return (
        <div className="py-10">
            <div className="text-center text-3xl py-8 text-holographic font-semibold tracking-wider">Products</div>
            {
                <ProductList initialProducts={products?.data?.data} query={query} last_page={products?.data?.last_page}/>
            }
        </div>
    )
}
