import AuthLayout from '@/app/layouts/AuthLayout'

export default function layout({children}) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    )
}