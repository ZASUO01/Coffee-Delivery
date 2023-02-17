import { DeliverState } from '../../contexts/ProductsContext'
import { ActionTypes } from './actions'
import {produce} from 'immer'

export function deliverReducer(state: DeliverState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push({quantity: action.payload.quantity, product: action.payload.product})
      })
    
    case ActionTypes.UPDATE_PRODUCT: {
      const targetItemIndex = state.cart.findIndex((item) => {
        return item.product.id === action.payload.id
      })

      if(targetItemIndex < 0){
        return state
      }

      return produce(state, (draft) => {
        draft.cart[targetItemIndex].quantity = action.payload.quantity
      })
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const targetItemIndex = state.cart.findIndex((item) => {
        return item.product.id === action.payload.id
      })

      if(targetItemIndex < 0){
        return state
      }

      return produce(state, (draft) => {
        draft.cart.splice(targetItemIndex, 1)
      })
    }

    case ActionTypes.CREATE_ORDER: 
      return produce(state, (draft) => {
        draft.cart = []
        draft.order = action.payload.order
      })
    
    default:
      return state
  }
}
