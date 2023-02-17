import { Order, Product } from '../../contexts/ProductsContext'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CREATE_ORDER = 'CREATE_ORDER'
}

export function addProductToCartAction(product: Product, quantity: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      quantity,
      product,
    },
  }
}

export function updateCartProductAction(productId: string, quantity: number){
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload: {
      quantity,
      id: productId
    }
  }
}


export function removeCartProductAction(productId: string){
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id: productId
    }
  }
}

export function createOrderAction(data: Order){
  return{
    type: ActionTypes.CREATE_ORDER,
    payload: {
      order: data
    }
  }
}