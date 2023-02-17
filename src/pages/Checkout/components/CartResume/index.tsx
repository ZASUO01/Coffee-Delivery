import { CartProduct } from '../../../../contexts/ProductsContext'
import { Card } from '../Card'
import { CartDetails, DetailsLine, CartResumeContainer} from './style'

interface CartResumeProps{
    cart: CartProduct[]
}

export function CartResume({cart}: CartResumeProps){
    const productsPrice = cart.reduce(
      (accumulator, currentProduct) => accumulator + (currentProduct.quantity * currentProduct.product.price),
      0 
    )
  
    const tax = cart.length > 0 ? 3.50 : 0
    const finalPrice = (productsPrice + tax)
    
    return(
        <CartResumeContainer>
        {cart.length > 0 ?
            cart.map(cartProduct => 
              <div key={cartProduct.product.id}>
               <Card cartProduct={cartProduct}/>
               <div className='card-divisor'>
                 <hr/>
               </div>
              </div>
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