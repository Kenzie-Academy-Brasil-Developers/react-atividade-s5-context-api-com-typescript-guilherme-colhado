import { useState, createContext, ReactNode, Dispatch, SetStateAction, useContext } from "react";

interface ProductsProviderProps {
    children: ReactNode;
}

interface Products {
    idProducts: number
    title: string
    description: string
    price: number
    image: string
}

interface ProductsProviderData {
    products: Products[]
    setProducts: Dispatch<SetStateAction<Products[]>>
}

const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData)

export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({children} : ProductsProviderProps) => {
    const [products, setProducts] = useState<Products[]>([
        {
            idProducts: 11,
            title: "Samsung Galaxy A01 Dual SIM 32 GB preto 2 GB RAM",
            description: "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
            price: 699.99,
            image: "https://http2.mlstatic.com/D_NQ_NP_661764-MLA44282592265_122020-O.webp",
        },
        {
            idProducts: 12,
            title: "Xiaomi Redmi 9A Dual SIM 32 GB azul 2 GB RAM",
            description: "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
            price: 799.99,
            image: "https://http2.mlstatic.com/D_NQ_NP_958898-MLA43824398273_102020-O.webp",
        },
        {
            idProducts: 13,
            title: "LG K11+ Dual SIM 32 GB dourado 3 GB RAM",
            description: "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
            price: 859.1,
            image: "https://http2.mlstatic.com/D_NQ_NP_633672-MLA31348110302_072019-O.webp",
        },
        {
            idProducts: 45,
            title: 'iPhone 11 Apple (64GB) Branco Tela 6,1" 4G Câmera 12MP iOS',
            description: "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
            price: 3899.99,
            image: "https://images-americanas.b2w.io/produtos/01/00/img/1614132/3/1614132374_1GG.jpg",
        },
    ])
    return <ProductsContext.Provider value={{products, setProducts}}></ProductsContext.Provider>
}