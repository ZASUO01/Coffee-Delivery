import { ShoppingCart } from 'phosphor-react'
import { CardContainer, CardBuy, CardTags } from './style'
import { Product } from '../../../contexts/ProductsContext'
import { QuantitySelector } from '../../../components/QuantitySelector'
import { FormEvent } from 'react'

interface CardProps {
  product: Product
}

export function Card({ product }: CardProps) {
  const imageUrl = `src/assets/${product.imageUrl}`

  function addToCart(event: FormEvent) {
    event.preventDefault()
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
          <QuantitySelector />
          <button type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </form>
      </CardBuy>
    </CardContainer>
  )
}
