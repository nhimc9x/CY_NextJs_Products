import DefaultLayout from '@/app/layouts/DefaultLayout'
import Link from "next/link";
import BrandList from "@/app/components/BrandList";
import SubHeadLine from "@/app/components/SubHeadLine";

const HomePage = () => {
    return (
        <DefaultLayout>
            <div
                style={{backgroundImage: 'url(\'https://images.hdqwalls.com/wallpapers/a-neon-city-4m.jpg\')'}}
                className="text-holographic bg-cover w-full aspect-video rounded-md brightness-75 flex items-center p-10">
                <div
                    className="h-max bg-white/10 shadow-2xl backdrop-blur-2xl rounded-xl text-center w-1/2 mx-auto px-6 py-12 space-y-8">
                    <div
                        className="text-5xl [text-shadow:_0_4px_8px_#FF1493] text-secondary uppercase tracking-widest font-black leading-tight"
                    >
                        Welcome to BlackShop
                    </div>
                    <div className="text-white text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quisquam, voluptatibus,
                        lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.
                    </div>
                    <Link href={'/products'}
                          className="max-w-[200px] block mx-auto text-lg duration-300 tracking-wider hover:tracking-[0.2rem] select-none rounded-lg bg-gradient-to-br from-primary to-blue-500 py-3 px-6 text-center align-middle font-sans font-bold uppercase text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Shop now
                    </Link>
                </div>
            </div>

            <SubHeadLine title="Popular Brands"/>

            <div className="px-8 pb-16">
                <BrandList/>
            </div>

            <SubHeadLine title="Popular Brands"/>
            <div className="py-10"></div>

        </DefaultLayout>
    )
}

export default HomePage
