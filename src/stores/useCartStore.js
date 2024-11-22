import {create} from "zustand"
import {createJSONStorage, persist} from 'zustand/middleware'
import {toast} from "react-toastify"

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => set((state) => {
                const findProduct = state.cart.find(item => item.id === product.id)
                if (findProduct) {
                    if (findProduct.quantity === product.stock) {
                        toast.error('Can not add more than stock quantity')
                        return state
                    }
                    findProduct.quantity += 1
                    return {cart: state.cart}
                }
                return {cart: [...state.cart, product]}
            }),
            getTotalPrice: () => get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            getQuantity: (id) => {
                const findProduct = get().cart.find(item => item.id === id)
                return findProduct ? findProduct.quantity : 0
            },
            plusQuantity: (id) => set((state) => {
                const findProduct = state.cart.find(item => item.id === id)
                if (findProduct) {
                    findProduct.quantity += 1
                    return {cart: state.cart}
                }
                return state
            }),
            minusQuantity: (id) => set((state) => {
                const findProduct = state.cart.find(item => item.id === id)
                if (findProduct) {
                    findProduct.quantity -= 1
                    return {cart: state.cart}
                }
                return state
            }),
            removeFromCart: (id) => set((state) => ({
                cart: state.cart.filter(item => item.id !== id)
            })),
            clearCart: () => set({cart: []}),
        }),
        {
            name: 'cartStore',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useCartStore
