import {GET, POST} from "@/services/apiServices"

export const getProducts = async () => {
    return await GET('/products')
}
