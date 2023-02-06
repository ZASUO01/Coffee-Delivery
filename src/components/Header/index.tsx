import { Actions, Cart, HeaderContainer } from './style'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
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
            <span>1</span>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
