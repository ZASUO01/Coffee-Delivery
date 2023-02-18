import { useContext, useState } from 'react'
import { ProductsContext, ProductTags } from '../../../../contexts/ProductsContext'
import { Card } from '../Card'
import { ListFilter } from '../ListFilter'
import { ListContainer, ListHead, ListContent } from './style'

export function CoffeeList() {
  const { products } = useContext(ProductsContext)
  const [listFilter, setListFilter] = useState<ProductTags | 'ALL'>('ALL')

  function handleChangeListFilter(value: ProductTags){
    if(listFilter === value){
      setListFilter('ALL')
    }else{
      setListFilter(value)
    }
  }

  const filteredList = listFilter === 'ALL' ? products : products.filter((product) => {
    return product.tags.includes(listFilter)
  })

  return (
    <ListContainer>
      <ListHead>
        <p>Nossos cafés</p>
        <ListFilter 
          listFilter={listFilter}
          handleChangeListFilter={handleChangeListFilter}
        />
      </ListHead>
      <ListContent>
        {filteredList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ListContent>
    </ListContainer>
  )
}
