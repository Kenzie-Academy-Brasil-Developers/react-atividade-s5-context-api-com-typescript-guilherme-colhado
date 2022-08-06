import { ReactNode } from "react"
import { CartProviders } from "./Cart";
import { ProductsProvider } from "./Products";

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
    return <ProductsProvider>
        <CartProviders>
            {children}
        </CartProviders>
    </ProductsProvider>
}