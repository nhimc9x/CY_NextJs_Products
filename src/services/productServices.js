import {GET, POST} from "@/services/apiServices"

export const getProducts = async (page = 1, query) => {
    return await GET('/products', {
        page: page,
        ...query
    })
}

export const checkout = async (address, phone, cart) => {
    return await POST('/order', {
        address: address,
        phone: phone,
        cart_item: cart
    })
}

export const getOrders = async () => {
    return await GET('/orders')
}

export const getCategories = async () => {
    return await GET('/categories')
}
