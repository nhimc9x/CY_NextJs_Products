import {create} from "zustand"
import {getCookie} from "cookies-next";
import {persist} from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: getCookie('token') || null,

            setUser: (user) => set({user}),
        })
    ),
    {
        name: 'auth-store',
    }
)

export default useAuthStore
