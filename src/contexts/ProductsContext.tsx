import { createContext, ReactNode, useEffect, useState } from 'react'

enum ProductTags {
    'TRADICONAL',
    'ESPECIAL',
    'COM LEITE',
    'ALCOÓLICO',
    'GELADO'
} 

export interface Product {
    id: number
    tags: ProductTags[]
    title: string
    subtitle: string
    price: number
    imageUrl: string
}

interface ProductsContextType{
    products: Product[]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProvidersProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProvidersProps) {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      fetch('./src/contexts/products.json')
      .then((response) => response.json())
      .then((json) => setProducts(json.products))       
    }, [])


    return (
    <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
  )
}
