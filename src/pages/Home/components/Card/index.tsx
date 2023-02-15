import { ShoppingCart } from 'phosphor-react'
import { CardContainer, CardBuy, CardTags } from './style'
import { CartProduct, Product, ProductsContext } from '../../../../contexts/ProductsContext'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { FormEvent, useContext, useState } from 'react'

interface CardProps {
  product: Product
}

export function Card({ product }: CardProps) {
  const { addProductToCart, isProductInCart, updateCartProduct } = useContext(ProductsContext)
  const [currentQty, setCurrentQty] = useState(1)
  
  const imageUrl = `src/assets/${product.imageUrl}`

  function addToCart(event: FormEvent) {
    event.preventDefault()
  
    
    if(isProductInCart(product.id)){
      updateCartProduct(product.id, currentQty)
    }else{
      const cartProduct: CartProduct = {
        product,
        quantity: currentQty
      }
      
      addProductToCart(cartProduct)
    }
  }


  function changeQty(qty: number){
    setCurrentQty((state) => state + qty)
  }

  return (
    <CardContainer>
      <img src={imageUrl} alt="" />
      <CardTags>
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardTags>
      <strong>{product.title}</strong>
      <p>{product.subtitle}</p>
      <CardBuy>
        <p>
          <span>R$</span> {product.price.toFixed(2)}
        </p>
        <form onSubmit={addToCart}>
          <QuantitySelector changeQty={changeQty} currentQty={currentQty} selectortHeight="lg" />
          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </form>
      </CardBuy>
    </CardContainer>
  )
}
