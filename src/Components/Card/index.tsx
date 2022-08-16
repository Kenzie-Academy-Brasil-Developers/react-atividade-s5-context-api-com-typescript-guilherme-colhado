import { ButtonComponent } from "../Button"
import { Card } from "./style"

interface Products {
    idProducts: number
    title: string
    description: string
    price: number
    image: string
}

interface CardComponentProps {
    idCart?: number
    title: string
    price: number
    image: string    
    remove: (id?: number) => void
    add: (product: Products) => void
    product: Products
    cart?: boolean
}

export const CardComponent = ({idCart, title, cart, price, image, remove, add, product}: CardComponentProps) => {
    return <Card>
        <div>
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div>
                <h2>{title}</h2>
                <h3>{price}</h3>
            </div>
        </div>
        <ButtonComponent cart={cart} onClick={()=>cart ? remove(idCart) : add(product)}>
            {cart ? 'Remover do carrinho' : 'Adicionar ao carrinho' }
        </ButtonComponent>
    </Card>
}