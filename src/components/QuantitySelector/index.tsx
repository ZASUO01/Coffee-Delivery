import { BuyQty } from './style'
import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  function remove() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function add() {
    setQuantity((state) => state + 1)
  }

  return (
    <BuyQty>
      <button type="button" onClick={remove}>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" min={1} value={quantity} readOnly />
      <button type="button" onClick={add}>
        <Plus size={14} weight="bold" />
      </button>
    </BuyQty>
  )
}
