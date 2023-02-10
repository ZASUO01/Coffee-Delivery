import { useContext } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext'
import { Card } from '../Card'
import { ListContainer, ListHead, ListContent, Filter } from './style'

export function CoffeeList() {
  const { products } = useContext(ProductsContext)

  return (
    <ListContainer>
      <ListHead>
        <p>Nossos cafés</p>
        <Filter>
          <button>TRADICIONAL</button>
          <button>ESPECIAL</button>
          <button>COM LEITE</button>
          <button>ALCOÓLICO</button>
          <button>GELADO</button>
        </Filter>
      </ListHead>
      <ListContent>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ListContent>
    </ListContainer>
  )
}
