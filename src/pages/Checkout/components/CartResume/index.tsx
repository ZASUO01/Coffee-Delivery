import { CartProduct } from '../../../../contexts/ProductsContext'
import { Card } from '../Card'
import { CartDetails, DetailsLine, CartResumeContainer} from './style'

interface CartResumeProps{
    cartState: CartProduct[]
}

export function CartResume({cartState}: CartResumeProps){
    const productsPrice = cartState.reduce(
      (accumulator, currentProduct) => accumulator + (currentProduct.quantity * currentProduct.product.price),
      0 
    )
  
    const tax = cartState.length > 0 ? 3.50 : 0
    const finalPrice = (productsPrice + tax)
    
    return(
        <CartResumeContainer>
        {cartState.length > 0 ?
            cartState.map(cartProduct => 
              <>
               <Card key={cartProduct.product.id}  cartProduct={cartProduct}/>
               <div className='card-divisor'>
                 <hr/>
               </div>
              </>
             )
          :  <p className='empty-cart'>Você ainda não fez nenhum pedido</p>
          }
          <CartDetails>
            <DetailsLine>
              <p>Total de itens</p>
              <span>{productsPrice.toFixed(2)}</span>
            </DetailsLine>
            <DetailsLine>
              <p>Entrega</p>
              <span>{tax.toFixed(2)}</span>
            </DetailsLine>
            <DetailsLine>
              <p>Total</p>
              <span>{finalPrice.toFixed(2)}</span>
            </DetailsLine>
          </CartDetails>
        </CartResumeContainer>
    )
}