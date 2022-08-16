import { ButtonHTMLAttributes, ReactNode } from "react"
import { Button } from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    cart?: boolean
}

export const ButtonComponent = ({children, cart, ...rest}: ButtonProps) => <Button cart={cart} {...rest}>{children}</Button>