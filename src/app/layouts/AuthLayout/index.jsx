export default function AuthLayout({children}) {
    return (
        <div
            style={{
                backgroundImage:
                    'url(https://wallpapercat.com/w/full/8/d/f/182906-2880x1800-desktop-hd-blackpink-background.jpg)',
            }}
            className="w-full min-h-screen grid place-items-center bg-bottom bg-no-repeat bg-cover py-6"
        >
            {children}
        </div>
    )
}