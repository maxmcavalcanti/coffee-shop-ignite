import { ButtonContainer, CardContainer, PriceCartZone } from "../../../Home/components/CoffeeCards/styles";
import expressoCoffee from '../../../../assets/expresso-tradicional.png'
import { Minus, Plus, ShoppingCartSimple, Trash } from "phosphor-react";
import { RemoveButton, SelectAndPriceContainer, SelectAndRemoveButtonContainer, SelectedCoffeeButtonContainer, SelectedCoffeeContainer } from "./styles";
import { CartContext, CartType } from "../../../../contexts/CartContext";
import { useContext } from "react";

export function CartCoffeeCard ({name, price, image_path, id, quantity} : CartType) {

  const {cart, setCart} = useContext(CartContext)

  function removeFromCart() {

    const cartWithoutItem = cart.filter(item => item.id !== id)
    setCart(cartWithoutItem)
  }
  function increaseQuantity() {
    const newCart = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(newCart)
  }
  function decreaseQuantity() {
    if(quantity===1) {
      removeFromCart()
      return
    }
    const newCart = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(newCart)
  }

  const finalPrice = parseFloat(price)
  console.log(price)

  return (
  <SelectAndPriceContainer>
    <SelectedCoffeeContainer>
      <img src={`/public/assets/coffee_photos/${image_path}`}/>
      <div>
        <p>{name}</p>
        <SelectAndRemoveButtonContainer>
          <SelectedCoffeeButtonContainer>
              <Minus size={16}  color='#8047F8' onClick={decreaseQuantity}/>
              <p>{quantity}</p>
              <Plus size={16}  color='#8047F8' onClick={increaseQuantity}/>
          </SelectedCoffeeButtonContainer>
          <RemoveButton onClick={removeFromCart}> 
            <Trash size={12} color='#8047F8'/>
            <p>REMOVER</p>
          </RemoveButton>
        </SelectAndRemoveButtonContainer>
      </div>
    </SelectedCoffeeContainer>
    <span>RS {(price*quantity).toFixed(2)}</span>
  </SelectAndPriceContainer>
  )
}