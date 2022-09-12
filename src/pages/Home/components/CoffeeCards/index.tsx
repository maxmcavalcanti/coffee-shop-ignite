import { ButtonContainer, CardContainer, PriceCartZone, TypeContainer } from "./styles";
import expressoCoffee from '../../../../assets/expresso-tradicional.png'
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import {CoffeeCardType} from '../../index'
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CartContext, CartType } from "../../../../contexts/CartContext";

export function CoffeeCard({name,id, image_path, price, description, type, quantity} : CoffeeCardType ) {

  const {cart, setCart} = useContext(CartContext)
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

 

  function increaseQuantity() {
    setCoffeeQuantity( coffeeQuantity + 1 )
  }

  function decreaseQuantity() {
    if(coffeeQuantity===1) {
      return
    }
    setCoffeeQuantity( coffeeQuantity - 1 )
  }

  function addToCart() {
    if(coffeeQuantity===0) {
      return
    }
    if(cart.find(item => item.id === id)) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return {
            ...item,
            quantity: item.quantity + coffeeQuantity
          }
        }
        return item
      })
      setCart(newCart)
    } else {

      const newCart = [{id, name, image_path, price, description, type, quantity: coffeeQuantity}]
      setCart((state) => [...state, ...newCart])
    } 

  }

  const itemPriceFloat = parseFloat(price)
  
  return(
    <CardContainer>
      <img src = {`/public/assets/coffee_photos/${image_path}`}  />
      <TypeContainer>
        {type.map((type) => {
          return (
            <span>{type}</span>
          )
        })}
      </TypeContainer>
      <h2>{name}</h2>
      <p>{description}</p>
      <PriceCartZone>
        <p>R$</p>
        <h2>{(price*coffeeQuantity).toFixed(2)}</h2>
        <ButtonContainer>
          <Minus size={12} onClick={decreaseQuantity}/>
          <p>{coffeeQuantity}</p>
          <Plus size={12} onClick={increaseQuantity}/>
        </ButtonContainer>
     
        <span onClick={addToCart}>
          <ShoppingCartSimple size={20} weight='fill' color='white' />
        </span> 
      </PriceCartZone>
    </CardContainer>
  )
}