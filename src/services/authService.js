import {GET, POST} from "@/services/apiService";

export const login = async (email, password) => {
    return await GET('/login', {
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

export const getUser = async () => {
    return await POST('/user')
}