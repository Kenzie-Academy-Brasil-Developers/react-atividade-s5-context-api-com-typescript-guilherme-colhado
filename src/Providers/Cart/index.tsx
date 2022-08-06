import { useState, createContext, useContext, ReactNode } from "react";

interface Cart extends Products{
    idCart: number    
}

interface Products {
    idProducts: number
    title: string
    description: string
    price: number
    image: string
}

interface CartProvidersData {
    carts: Cart[]
    addToCart: (product: Products) => void
    removeToCart: (idCart: number) => void
}

interface CartProvidersProps {
    children: ReactNode
}

const CartContext = createContext<CartProvidersData>({} as CartProvidersData)

export const useCart = () => useContext(CartContext)

export const CartProviders = ({children}: CartProvidersProps) => {
    const [carts, setCarts] = useState<Cart[]>([])

    const addToCart = (product: Products) => {
        setCarts([...carts, {idCart: carts.length, ...product}])
    }

    const removeToCart = (idCart: number) => {
        setCarts(carts.filter(cart=> cart.idCart !== idCart))
    }

    return <CartContext.Provider value={{carts, addToCart, removeToCart}}>{children}</CartContext.Provider>

}