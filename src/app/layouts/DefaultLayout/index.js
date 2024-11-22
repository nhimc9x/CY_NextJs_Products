import Header from "@/app/layouts/DefaultLayout/components/Header";
import Footer from "@/app/layouts/DefaultLayout/components/Footer";

export default function RootLayout({children}) {
    return (
        <div className="bg-secondary w-full min-h-screen">
            <Header/>
            <div className="pt-20 wrapper bg-tertiary">
                {children}
            </div>
            <Footer/>
        </div>
    )
}