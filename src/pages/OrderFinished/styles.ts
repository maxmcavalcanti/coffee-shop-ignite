import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 2.5rem auto;
  height: 100%;
  gap: 2rem;
  justify-content:center;
  flex-direction: column;
`
export const OrderAndImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:2rem;
`

export const ImageContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`

export const ConfirmedOrderContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  padding: 2.5rem;
  background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(135deg, #DBAC2C, #8047F8) border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;

`

export const OrderContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const OrderContentTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

`

export const IconContainerBase = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  padding: 0.5rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MapIconContainer = styled(IconContainerBase)`
  background: ${props => props.theme['purple']};
`
export const TimerIconContainer = styled(IconContainerBase)`
  background: ${props => props.theme['yellow']};
`
export const CurrencyIconContainer = styled(IconContainerBase)`
  background: ${props => props.theme['yellow-dark']};
`
export const ConfirmedOrderHeader = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color:${props => props.theme['yellow-dark']};
    font-size: 2rem;
    line-height: 41.6px;
    font-weight: bold;
    font-family: 'baloo 2', sans-serif;
  }
  p{
    font-size: 1.25rem;
    line-height: 26px;
    color: ${props => props.theme['base-subtitle']};
  }
`