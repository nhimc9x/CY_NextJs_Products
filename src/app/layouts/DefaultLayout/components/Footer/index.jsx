import Link from "next/link";

export default function Footer() {
    return (
        <div className="wrapper">
            <div className="mx-auto pb-24">
                <div className="flex md:flex-row flex-col md:text-left text-center md:gap-4 gap-10">
                    <div className="basis-5/12 flex flex-col items-center md:items-start md:gap-0 gap-y-4">
                        <div className="text-2xl leading-loose font-semibold italic">
                            Nhidev
                        </div>
                        <div className="text-sm text-gray-400 mb-2">Delivering the best asss life since 1996. From
                            nhidev geeks to the
                            real ones.
                        </div>
                        <div className="text-sm text-gray-400 mt-auto">Vuvannhi7703. © 2024</div>
                    </div>
                    <div className="basis-2/12">
                        <div className="mb-6 uppercase text-sm text-gray-500 font-medium tracking-widest">Menu</div>
                        <ul className="text-sm text-gray-400 flex flex-col gap-2">
                            <li>
                                <Link href={'/products'} className="hover:text-primary">Products</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="hover:text-primary">Profile</Link>
                            </li>
                            <li>
                                <Link href={'/cart'} className="hover:text-primary">Cart</Link>
                            </li>
                            <li>
                                <Link href={'/checkout'} className="hover:text-primary">Checkout</Link>
                            </li>
                            <li>
                                <Link href={'/orders'} className="hover:text-primary">Order</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-2/12">
                        <div className="mb-6 uppercase text-sm text-gray-500 font-medium tracking-widest">Follow Us
                        </div>
                        <ul className="text-sm text-gray-400 flex flex-col gap-2">
                            <li>
                                <a href="" className="hover:text-primary">Facebook</a>
                            </li>
                            <li>
                                <a href="" className="hover:text-primary">Instagram</a>
                            </li>
                            <li>
                                <a href="" className="hover:text-primary">Pinterest</a>
                            </li>
                            <li>
                                <a href="" className="hover:text-primary">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-3/12 flex flex-col">
                        <div className="mb-6 uppercase text-sm text-gray-500 font-medium tracking-widest">Contact Us
                        </div>
                        <div className="text-sm text-gray-400 mb-4">We're Always Happy to Help</div>
                        <div className="mb-2"><a href=""
                                                 className="hover:text-primary text-gray-500">vuvannhi7703@gmail.com</a>
                        </div>
                        <div className="text-sm text-gray-400 hover:text-primary mt-auto">Powered by Vuvannhi Author
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}