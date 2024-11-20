"use client";
import {setCookie} from 'cookies-next';
import InputForm from "@/app/(auth)/components/InputForm";
import ButtonForm from "@/app/(auth)/components/ButtonForm";
import Link from "next/link";
import {useState} from "react";
import {login} from "@/services/authServices";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import useAuthStore from "@/stores/useAuthStore";

export default function LoginPage() {
    const router = useRouter()
    const authStore = useAuthStore()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await login(email, password)
            console.log('res: ', res.data.user.name)
            toast.success(`Login success, welcome ${res.data.user.name}`)
            setCookie('token', res.data.token, {
                maxAge: 60 * 60 * 24 * 7,
            })
            authStore.setUser(res.data.user)
            await router.push('/')
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <div
            className="sm:min-w-[500px] xs:min-w-[450px] xs:w-max w-[92%] bg-white/20 backdrop-blur-2xl border-2 border-[#80f0ff] rounded-md sm:p-14 py-12 px-8">
            <div className="text-4xl font-bold tracking-widest text-slate-900 text-center mb-14">Login</div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <InputForm value={email} setValue={setEmail} type="email" placeholder="Email"/>
                <InputForm value={password} setValue={setPassword} type="password" placeholder="Password"/>
                <ButtonForm title="Login"/>
            </form>
            <div className="my-6 text-right text-gray-300">Don't have an account?
                <Link className="text-[#80f0ff] ml-1" href='/signup'>SignUp</Link>
            </div>
        </div>
    )
}