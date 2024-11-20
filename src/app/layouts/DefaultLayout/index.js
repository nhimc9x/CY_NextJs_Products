export default function RootLayout({children}) {
    return (
        <>
            <div className="">Header</div>
            {children}
            <div className="">Footer</div>
        </>
    )
}