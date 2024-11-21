import {GET, POST} from "@/services/apiServices";

export const login = async (email, password) => {
    return await POST('/login', {
        email,
        password,
    })
}

export const signup = async (name, email, password) => {
    console.log('name: ', name)
    return await POST('/signup', {
        name,
        email,
        password,
    })
}

export const logout = async () => {
    return await POST('/logout')
}

export const checkAuth = async () => {
    return await GET('/user')
}