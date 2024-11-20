import DefaultLayout from '@/app/layouts/DefaultLayout'
import Link from "next/link";

const HomePage = () => {
    return (
        <DefaultLayout>
            <div className="">Home Page</div>
            <Link href="/products">Products</Link>
        </DefaultLayout>
    )
}

export default HomePage
