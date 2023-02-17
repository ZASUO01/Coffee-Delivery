import { Actions, Cart, HeaderContainer } from './style'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

export function Header() {
  const { cart } = useContext(ProductsContext)

  const cartQty = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Coffee Delivery Logo" />
      </NavLink>
      <Actions>
        <span>
          <MapPin size={22} weight="fill" />
          Belo Horizonte, MG
        </span>
        <NavLink to="/checkout" title="Carrinho">
          <Cart>
            {cartQty > 0 && <span>{cartQty}</span>}
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
