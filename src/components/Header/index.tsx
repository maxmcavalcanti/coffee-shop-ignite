import {Badge, CartIconContainer, HeaderContainer, MapIconContainer} from './styles'
import { NavLink } from 'react-router-dom'
import shopLogo from '../../assets/coffee-shop-logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'
 
export function Header() {
  return(
    <HeaderContainer>
      <img src={shopLogo} alt=''/>
        <nav>
          <NavLink to='/' title='Location'>
            <MapIconContainer>
              <MapPin size={24} color='#8047F8' weight='fill'/>
              <a>Porto Alegre, RS</a>
            </MapIconContainer>
          </NavLink>
          <NavLink to='/' title='Shopping-cart'>
            <CartIconContainer>
              <ShoppingCart to='' size={24} color='#C47F17' weight='fill'/>
              <Badge>1</Badge>
            </CartIconContainer>
          </NavLink>
        </nav>
    </HeaderContainer>
  )
}