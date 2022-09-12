import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 2.5rem auto;
  height: 100%;
  gap: 2rem;
  justify-content:center;
  `

export const LeftContainer = styled.div`
  width: 60%;
  max-width: 40rem;
  gap: 1rem;
  h3 {
    font-family:'baloo 2', sans-serif;
  }
`
export const AdressAndPaymentFullContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const AdressAndPaymentContainer = styled.div`
  background:${props => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin: 0rem 0 1rem 0;
  h4 {
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 130%;
  }
  p{
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
  }
 
`


export const BaseInput = styled.input`
  border-radius: 4px;
  padding: 0.75rem;
  color: ${props => props.theme['base-text']};
  border: 1px solid ${props => props.theme['base-button']};
  width: 40%;


  ::placeholder{
    color: ${props => props.theme['base-label']};
    font-size: 0.875rem;
    line-height:130%;
  }
 
  :placeholder-shown {
    border: 1px solid ${props => props.theme['base-button']};
    background: ${props => props.theme['base-input']};
    :active, :focus {
      border: 1px solid ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['base-text']};
    }
  }

`

export const VerySmallInput = styled(BaseInput)`
  width: 10%;
`
export const SmallInput = styled(BaseInput)`
  width: 40%;
`
export const LargeInput = styled(BaseInput)`
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  
  input:nth-child(2){
    flex:1;

  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`

export const PaymentButton = styled.button`
  background: ${props => props.theme['base-button']};
  border: none;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  gap: 0.75rem;
  padding: 1rem;
  justify-content: flex-start;
  align-items: center;
  height: 51px;
  min-width: 10rem;
  
  p{
    font-size:0.75rem;
    color: ${props => props.theme['base-text']};
  }

  :focus {
    border: 1px solid ${props => props.theme['purple']};
    background: ${props => props.theme['purple-light']};
  }
  :hover {
    cursor: pointer;
  }
`

//Summary Container


export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:40%;
  max-width: 30rem;
  h4 {
    font-family:'baloo 2', sans-serif;
  }
`
export const SummaryContainer = styled.div`
  background:${props => props.theme['base-card']};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 6px 44px;
  padding: 3rem 2.75rem;
`


export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap:0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    span {
     font-size:0.875rem;
     line-height:130%;
     color:${props => props.theme['base-text']}; 
    }
  }
  div:nth-child(3){
      span {
        font-size:1.25rem;
      font-weight: bold;
      color:${props => props.theme['base-subtitle']};
      }
  }
  `

  export const ConfirmOrderButton = styled.button`
    background: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    width: 100%;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 700;

    :hover {
      background: ${props => props.theme['yellow-dark']};
      cursor: pointer;
    }
  `