import { IntroContaner, Items, Title, Item } from './style'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import intro from '../../../assets/intro.svg'

export function Intro() {
  return (
    <IntroContaner>
      <div>
        <Title>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Items>
          <Item>
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </Item>
          <Item>
            <span>
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </Item>
          <Item>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </Item>
          <Item>
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </Item>
        </Items>
      </div>
      <img src={intro} alt="Copo de café Coffee Delivery" />
    </IntroContaner>
  )
}
