import Header from "@/app/layouts/DefaultLayout/components/Header";
import Footer from "@/app/layouts/DefaultLayout/components/Footer";

export default function RootLayout({children}) {
    return (
        <>
            <Header/>
            <div className="pt-20 wrapper">
                {children}
            </div>
            <Footer/>
        </>
    )
}