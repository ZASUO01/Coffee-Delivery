import { BuyQty } from './style'
import { Minus, Plus } from 'phosphor-react'

interface QuantitySelectorProps{
  changeQty: (qty: number) => void
  currentQty: number,
  selectortHeight: "sm" | "lg"
}

export function QuantitySelector({changeQty, currentQty, selectortHeight}: QuantitySelectorProps) {
  function remove() {
    if (currentQty > 1) {
      changeQty(-1)
    }
  }

  function add() {
    changeQty(1)
  }

  return (
    <BuyQty selectorHeight={selectortHeight}>
      <button type="button" onClick={remove}>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" min={1} value={currentQty} readOnly />
      <button type="button" onClick={add}>
        <Plus size={14} weight="bold" />
      </button>
    </BuyQty>
  )
}
