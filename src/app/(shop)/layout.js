import DefaultLayout from '@/app/layouts/DefaultLayout'

export default function layout({children}) {
    return (
        <DefaultLayout>
            {children}
        </DefaultLayout>
    )
}