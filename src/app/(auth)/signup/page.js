"use client";

import Link from "next/link";
import ButtonForm from "@/app/(auth)/components/ButtonForm";
import InputForm from "@/app/(auth)/components/InputForm";
import {useState} from "react";
import {signup} from "@/services/authServices";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

export default function SignUpPage() {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(username, email, password)
            toast.success('Signup success, please login')
            await router.push('/login')
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <div
            className="sm:min-w-[500px] xs:min-w-[450px] xs:w-max w-[92%] bg-white/20 backdrop-blur-2xl border-2 border-[#80f0ff] rounded-md sm:p-14 py-12 px-8">
            <div className="text-4xl font-bold tracking-widest text-slate-900 text-center mb-14">SignUp</div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <InputForm value={username} setValue={setUsername} type="text" placeholder="Username"/>
                <InputForm value={email} setValue={setEmail} type="email" placeholder="Email"/>
                <InputForm value={password} setValue={setPassword} type="password" placeholder="Password"/>
                <ButtonForm title="SignUp"/>
            </form>
            <div className="my-6 text-right text-gray-300">You have an account?
                <Link className="text-[#80f0ff] ml-1" href='/login'>Login</Link>
            </div>
        </div>
    )
}