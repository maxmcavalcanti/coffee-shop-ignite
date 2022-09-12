import { Bank, CreditCard, CurrencyDollar, CurrencyDollarSimple, MapPinLine, Money } from "phosphor-react"
import { TitleContainer, BaseInput, InputContainer, LargeInput, OrderContainer, SmallInput, SummaryContainer, VerySmallInput, AdressAndPaymentContainer, PaymentContainer, AdressAndPaymentFullContainer, ButtonContainer, PaymentButton, TotalPriceContainer, ConfirmOrderButton, RightContainer, LeftContainer } from "./styles"
import styled from "styled-components"
import { CartCoffeeCard } from "./components/RemoveButton"
import { useContext, useState } from "react"
import { CartContext, FormType } from "../../contexts/CartContext"
import { CartType } from "../../contexts/CartContext"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"



export function Cart() {
const navigate = useNavigate()
const { cart, setAddress, address ,setCart} = useContext(CartContext)
const finalPrice = cart.map(item => {
  return (parseFloat(item.price))
})

const transportPrice = Math.random()*10
const totalCoffeeCost = cart.reduce(
  (acc, item) => {
    return acc + item.quantity * parseFloat(item.price)
  }, 0
)

const { register, handleSubmit, watch } = useForm()

function handleCreateNewOrder(data: FormType) {
  if(!isButtonClicked){
    alert('Escolha o método de pagamento')
    return
  }
  setAddress((state:any)=> {
      return {
        ...state,
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
      }   
    }
  )
  const emptyCart = cart.filter(item => item.id === undefined)    
  setCart(emptyCart)
  navigate('/finished')    
 
}

function handleCreditCard () {
 setAddress((state:any)=> {
    return {
      ...state,
      payment: 'Cartão de Crédito'
    }}
  )
  checkButton()
}
function handleDebitCard () {
 setAddress((state:any)=> {
    return {
      ...state,
      payment: 'Cartão de Débito'
    }}
  )
  checkButton()
}
function handleMoney () {
 setAddress((state:any)=> {
    return {
      ...state,
      payment: 'Dinheiro'
    }}
  )
  checkButton()
}

const [isButtonClicked, setIsButtonClicked] = useState(false)

function checkButton() {
  setIsButtonClicked(true)
}

console.log(isButtonClicked)

  return (
     
      <OrderContainer>
        <LeftContainer>
          <h3>Complete seu pedido</h3>
            <AdressAndPaymentFullContainer>
                  <AdressAndPaymentContainer>
                    <TitleContainer>
                      <div>
                        <MapPinLine size={22} color='#C47F17'/>
                      </div>
                      <div>
                        <h4>Endereço de entrega</h4>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                      </div>
                    </TitleContainer>
                    <form onSubmit={handleSubmit(handleCreateNewOrder)} id="adressForm">
                      <SmallInput placeholder="CEP" required id="cep" {...register('cep')} defaultValue = {'' || address.cep } />
                      <LargeInput placeholder="Rua" required id="rua" {...register('rua')} defaultValue={'' || address.rua  } />
                      <InputContainer>
                        <SmallInput placeholder="Número" required id="numero" {...register('numero') } defaultValue={'' || address.numero} />
                        <LargeInput placeholder="Complemento (Opcional)" id="complemento" {...register('complemento')}  defaultValue={'' || address.complemento} />
                      </InputContainer>
                      <InputContainer>
                        <BaseInput placeholder="Bairro" required id="bairro" {...register('bairro')}  defaultValue={'' || address.bairro} />
                        <LargeInput placeholder="Cidade"  required id="cidade" {...register('cidade')}  defaultValue={'' || address.cidade} />
                        <VerySmallInput placeholder="UF" required  id="uf" {...register('uf')} defaultValue={'' || address.uf} />
                      </InputContainer>
                    </form>
                  </AdressAndPaymentContainer>
                <AdressAndPaymentContainer>
                    <TitleContainer>
                        <div>
                          <CurrencyDollar size={22} color='#8047F8'/>
                        </div>
                        <div>
                          <h4>Pagamento</h4>
                          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                      </TitleContainer>
                      <ButtonContainer >
                        <PaymentButton onClick={handleCreditCard}>
                          <CreditCard size={16} color='#8047F8'/>
                          <p>CARTÃO DE CRÉDITO</p>
                        </PaymentButton>
                        <PaymentButton onClick={handleDebitCard}>
                          <Bank size={16} color='#8047F8'/>
                          <p>CARTÃO DE DEBITO</p>
                        </PaymentButton>
                        <PaymentButton onClick={handleMoney}>
                          <Money size={16} color='#8047F8'/>
                          <p>DINHEIRO</p>
                        </PaymentButton>
                      </ButtonContainer>
                  </AdressAndPaymentContainer>
              </AdressAndPaymentFullContainer>
         </LeftContainer>

      <RightContainer>
        <h3>Cafés selecionados</h3>
         <SummaryContainer>
          {cart.map((item:CartType)=>{
            return <CartCoffeeCard 
            key={item.id} 
            name={item.name} 
            image_path={item.image_path} 
            price={Number(item.price).toFixed(2)} 
            quantity={item.quantity}
            id={item.id}
            />
              })
            }

      
          <TotalPriceContainer>
            <div>
              <span>Total de itens</span>
              <span> R$ {totalCoffeeCost.toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span> R$ {transportPrice.toFixed(2)}</span>
            </div>
            <div>
              <span>Total</span>
              <span> R$ {(transportPrice+totalCoffeeCost).toFixed(2)}</span>
            </div>
            <ConfirmOrderButton type="submit" form="adressForm">CONFIRMAR PEDIDO</ConfirmOrderButton>
          </TotalPriceContainer>
        </SummaryContainer>
       </RightContainer>
    </OrderContainer>
  )
}