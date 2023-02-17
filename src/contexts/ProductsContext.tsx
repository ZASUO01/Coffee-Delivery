import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { addProductToCartAction, createOrderAction, removeCartProductAction, updateCartProductAction } from '../reducers/cart/actions'
import { deliverReducer } from '../reducers/cart/reducer'
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

export interface Order {
  address: {
    cep: string,
    street: string,
    number: string,
    complement?: string,
    neighborhood: string,
    city: string,
    uf: string
  }
  paymentOption: string,
}

export interface DeliverState {
  cart: CartProduct[]
  order: Order | null
}

interface ProductsContextType{
    products: Product[]
    cart: CartProduct[]
    order: Order | null
    addProductToCart: (data: CartProduct) => void
    isProductInCart: (id: string) => boolean
    updateCartProduct: (id: string, quantity: number) => void
    removeCartProduct: (id: string) => void
    createOrder: (data: Order) => void
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProvidersProps {
  children: ReactNode,
  
}

export function ProductsContextProvider({
  children,
}: ProductsContextProvidersProps) {
    const  [deliverState, dispatch] = useReducer(
      deliverReducer,
      {
        cart: [],
        order: null
      }
    )
  
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
      const foundProduct = deliverState.cart.find((item) => {
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
     
    function createOrder(data: Order){
      dispatch(createOrderAction(data))
    }

    const { cart, order} = deliverState

    return (
    <ProductsContext.Provider value={
      {
        products,
        cart,
        order,
        addProductToCart,
        isProductInCart,
        updateCartProduct,
        removeCartProduct,
        createOrder 
      }}
      >{children}
    </ProductsContext.Provider>
  )
}
