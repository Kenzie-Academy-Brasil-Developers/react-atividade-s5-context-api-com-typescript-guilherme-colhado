import { useState, createContext, useContext, ReactNode } from "react";

interface Cart extends Products{
    idCart?: number   
    cart: boolean 
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
    removeToCart: (idCart?: number) => void
}

interface CartProvidersProps {
    children: ReactNode
}

const CartContext = createContext<CartProvidersData>({} as CartProvidersData)

export const useCart = () => useContext(CartContext)

export const CartProviders = ({children}: CartProvidersProps) => {
    const [carts, setCarts] = useState<Cart[]>( JSON.parse(localStorage.getItem('@Produtos: cart') || '[]'))

    const addToCart = (product: Products) => {
        const newCart = [...carts, {idCart: carts.length, cart: true, ...product}]
        localStorage.setItem('@Produtos: cart', JSON.stringify(newCart))
        setCarts(newCart)
    }

    const removeToCart = (idCart?: number) => {
        const newCart = carts.filter(cart=> cart.idCart !== idCart)
        localStorage.setItem('@Produtos: cart', JSON.stringify(newCart))
        setCarts(newCart)
    }

    return <CartContext.Provider value={{carts, addToCart, removeToCart}}>{children}</CartContext.Provider>

}