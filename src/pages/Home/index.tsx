import {ShoppingCart, Timer, Package, Coffee} from 'phosphor-react'
import { CardsContainer, Container, IconContainer, IconRadiusCircleCart, IconRadiusCircleCoffee, IconRadiusCirclePackage, IconRadiusCircleTimer, ImageContainer, MainContainer, TextContainer, TextContainerBottom, TextContainerTop } from './styles'
import coffee from '../../assets/coffee.png'
import { CoffeeCard } from './components/CoffeeCards'

import { DbCoffeeList } from '../../db/CoffeeList'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'


export interface CoffeeCardType {
  name : string,
  description : string,
  price : string,
  type: string[],
  image_path: string,
  id: number,
  quantity:number
}


export function Home() {


const { cart, setCart, quantity, setQuantity } = useContext(CartContext)

  return (
    <Container>
      <MainContainer>
        <TextContainer>
          <TextContainerTop>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>Com o Coffee Deliery você receve seu café onde estiver, a qualquer hora</p>
          </TextContainerTop>
            <TextContainerBottom>
              <IconContainer>
                <IconRadiusCircleCart>       
                  <ShoppingCart size={24} weight='fill' color='white'/>
                </IconRadiusCircleCart>
                <p>Compra simples e segura</p>
              </IconContainer>
              <IconContainer>
                <IconRadiusCirclePackage>       
                  <Package size={24} weight='fill' color='white'/>
                </IconRadiusCirclePackage>
                <p>Embalagem mantém o café intacto</p>
              </IconContainer>
              <IconContainer>
                <IconRadiusCircleTimer>       
                  <Timer size={24} weight='fill' color='white'/>
                </IconRadiusCircleTimer>
                <p>Entrega rápida e rastreada</p>
              </IconContainer>
              <IconContainer>
                <IconRadiusCircleCoffee>       
                  <Coffee size={24} weight='fill' color='white'/>
                </IconRadiusCircleCoffee>
                <p>O café chega fresquinho até você</p>
              </IconContainer>
            </TextContainerBottom>
          </TextContainer>
        <ImageContainer>
          <img src={coffee}/>
        </ImageContainer>
      </MainContainer>

      <CardsContainer>
        {(DbCoffeeList).map(coffee=> {
          return (
            <CoffeeCard 
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
            type={coffee.type}
            image_path={coffee.image_path}
            quantity={coffee.quantity}
            />  
          )
        })}
        
      </CardsContainer>
    </Container>

  )
}