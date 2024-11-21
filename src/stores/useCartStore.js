import {create} from "zustand"
import {createJSONStorage, persist} from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => set((state) => {
                const findProduct = state.cart.find(item => item.id === product.id)
                if (findProduct) {
                    findProduct.quantity += 1
                    return {
                        cart: state.cart
                    }
                }
                return {
                    cart: [...state.cart, product]
                }
            }),
            getTotalPrice: () => get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            removeFromCart: (id) => set({cart: set.cart.filter(item => item.id !== id)}),
            clearCart: () => set({cart: []}),
        }),
        {
            name: 'cartStore',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useCartStore
