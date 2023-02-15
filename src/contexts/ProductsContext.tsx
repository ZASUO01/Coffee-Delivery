import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { addProductToCartAction, removeCartProductAction, updateCartProductAction } from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'
import {v4 as uuidv4} from 'uuid'

enum ProductTags {
    'TRADICONAL',
    'ESPECIAL',
    'COM LEITE',
    'ALCOÓLICO',
    'GELADO'
} 

export interface Product {
    id: string
    tags: ProductTags[]
    title: string
    subtitle: string
    price: number
    imageUrl: string
}

export interface CartProduct {
  quantity: number
  product: Product
}


interface ProductsContextType{
    products: Product[]
    cartState: CartProduct[]
    addProductToCart: (data: CartProduct) => void
    isProductInCart: (id: string) => boolean
    updateCartProduct: (id: string, quantity: number) => void,
    removeCartProduct: (id: string) => void
}



export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProvidersProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProvidersProps) {
  const[cartState, dispatch] = useReducer(
    cartReducer,
    [])  
  
  const [order, setOrder] = useState(null)

  const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      fetch('./src/contexts/products.json')
      .then((response) => response.json())
      .then((json) => {
        const productsArray: Product[] = json.products
        const productsWithId = productsArray.map(product => {
          return {...product, id: uuidv4()}
        })
        
        setProducts(productsWithId)
      }
      )       
    }, [])


    function addProductToCart(data: CartProduct){
      dispatch(addProductToCartAction(data.product, data.quantity))
    }

    function isProductInCart(id: string){
      const foundProduct = cartState.find((item) => {
        return item.product.id === id
      })

      if(foundProduct){
        return true
      }
      
      return false
    }

    function updateCartProduct(id: string, quantity: number){
      dispatch(updateCartProductAction(id, quantity))
    }

    function removeCartProduct(id: string){
      dispatch(removeCartProductAction(id))
    }

    function generateOrder(){

    }

    function cleanOrder(){
      setOrder(null)
    }

    return (
    <ProductsContext.Provider value={
      {
        products, 
        cartState, 
        addProductToCart, 
        isProductInCart, 
        updateCartProduct,
        removeCartProduct
      }}
      >{children}
    </ProductsContext.Provider>
  )
}
