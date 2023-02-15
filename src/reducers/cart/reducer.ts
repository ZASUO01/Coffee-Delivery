import { CartProduct } from '../../contexts/ProductsContext'
import { ActionTypes } from './actions'
import {produce} from 'immer'

export function cartReducer(state: CartProduct[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.push({quantity: action.payload.quantity, product: action.payload.product})
      })
    
    case ActionTypes.UPDATE_PRODUCT: {
      const targetItemIndex = state.findIndex((item) => {
        return item.product.id === action.payload.id
      })

      if(targetItemIndex < 0){
        return state
      }

      return produce(state, (draft) => {
        draft[targetItemIndex].quantity = action.payload.quantity
      })
    }
    
    case ActionTypes.REMOVE_PRODUCT: {
      const targetItemIndex = state.findIndex((item) => {
        return item.product.id === action.payload.id
      })

      if(targetItemIndex < 0){
        return state
      }

      return produce(state, (draft) => {
        draft.splice(targetItemIndex, 1)
      })
    }
      
    default:
      return state
  }
}
