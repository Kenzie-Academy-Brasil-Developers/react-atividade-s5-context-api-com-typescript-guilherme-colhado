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
    idProducts: number
    title: string
    price: number
    image: string    
    remove: (id: number) => void
    add: (product: Products) => void
    product: Products
}

export const CardComponent = ({idCart, idProducts, title, price, image, remove, add, product}: CardComponentProps) => {
    return <Card>
        <figure>
            <img src={image} alt={title} />
        </figure>
        <div>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </div>
        <ButtonComponent cart={!!idCart} onClick={()=>idCart ? remove(idCart) : add(product)}>
            {idCart ? 'Remover do carrinho' : 'Adicionar ao carrinho' }
        </ButtonComponent>
    </Card>
}