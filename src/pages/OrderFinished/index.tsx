import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ConfirmedOrderContainer, ConfirmedOrderHeader, CurrencyIconContainer, IconContainer, ImageContainer, MapIconContainer, OrderAndImageContainer, OrderContainer, OrderContentBox, OrderContentTextBox, TimerIconContainer } from "./styles";
import imageMotorcycle from '../../assets/Illustration-finished.svg';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function OrderFinished() {
  const {address} = useContext(CartContext)


  return(
    <OrderContainer>
      <ConfirmedOrderHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </ConfirmedOrderHeader>
      <OrderAndImageContainer>
        <ConfirmedOrderContainer>
          <OrderContentBox>
            <MapIconContainer>
              <MapPin size={24} weight='fill' color='white' />
            </MapIconContainer>
            <OrderContentTextBox>
              <p>Entrega em <strong>{address.rua}, {address.numero}</strong></p>
              <p>{address.bairro} - {address.cidade}, {address.uf}</p>
            </OrderContentTextBox>
          </OrderContentBox>
          <OrderContentBox>
            <TimerIconContainer>
              <Timer size={24} weight='fill' color='white' />
            </TimerIconContainer>
            <OrderContentTextBox>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </OrderContentTextBox>
          </OrderContentBox>
          <OrderContentBox>
            <CurrencyIconContainer>
              <CurrencyDollar size={24} weight='fill' color='white' />
            </CurrencyIconContainer>
            <OrderContentTextBox>
              <p>Pagamento na entrega</p>
              <p><strong>{address.payment}</strong></p>
            </OrderContentTextBox>
          </OrderContentBox>
       
        </ConfirmedOrderContainer>
        <ImageContainer>
          <img src={imageMotorcycle}/>
        </ImageContainer>
      </OrderAndImageContainer>
    </OrderContainer>
  )
}