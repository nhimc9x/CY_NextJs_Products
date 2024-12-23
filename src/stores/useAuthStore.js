import {create} from "zustand"
import {getCookie} from "cookies-next";

const useAuthStore = create(set => ({
        user: null,
        token: getCookie('token') || null,
    
        setUser: (user) => set({user}),
        clearStore: () => set({user: null, token: null}),
    })
)

export default useAuthStore
