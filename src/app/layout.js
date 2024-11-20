import '@/app/globals.css'

export default function MainLayout({children}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}
