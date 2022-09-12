import {Badge, CartIconContainer, HeaderContainer, MapIconContainer} from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
import shopLogo from '../../assets/coffee-shop-logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
 
export function Header() {
  const {cart} = useContext(CartContext)
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  const navigate = useNavigate()

  return(
    <HeaderContainer>
      <NavLink to="/">
        <img src={shopLogo} alt="Coffee Shop Logo" />
      </NavLink>
        <nav>
          <NavLink to='/' title='Location'>
            <MapIconContainer>
              <MapPin size={24} color='#8047F8' weight='fill'/>
              <a>Porto Alegre, RS</a>
            </MapIconContainer>
          </NavLink>
          <NavLink to='/cart' title='Shopping-cart'>
            <CartIconContainer>
              <ShoppingCart to='' size={24} color='#C47F17' weight='fill'/>
              {quantity!=0&&<Badge>{quantity}</Badge>}
            </CartIconContainer>
          </NavLink>
        </nav>
    </HeaderContainer>
  )
}