// React modules
import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart= (breed) => {
        setCart(current => {
            const existing = current.find(item => item.id === breed.id)

            if (existing) {
                return current.map(item => 
                    item.id === breed.id
                        ? { ...item, quantity: item.quantity + 1}
                        :item
                )
            }

            return [
                ...current,
                {
                    id: breed.id,
                    name: breed.name,
                    quantity: 1,
                    price: 500,
                    reference_image_id: breed.reference_image_id
                }
            ]
        })
    }

    const removeFromCart = (id) => {
        setCart(current => {
            return current.flatMap(item => {
                if (item.id !== id) return item

                if (item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity -1
                    }
                }

                return []
            })
        })
    }

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    )

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                totalQuantity,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

    export function useCart() {
        return useContext(CartContext)
}