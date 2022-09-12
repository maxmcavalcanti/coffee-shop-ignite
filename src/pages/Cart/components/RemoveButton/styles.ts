import styled from 'styled-components'


export const SelectAndRemoveButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

`
export const SelectAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme['base-button']};
  margin-bottom: 1.5rem;
  span {
    font-weight:bold;
    color:${props => props.theme['base-text']}
  }
`

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap:1.25rem;
  padding-bottom:1.5rem ;


  img{
    width:64px;
    height:64px;
  }
  p {
    color: ${props=>props.theme['base-subtitle']};
    font-size:1rem;
    line-height:130%;
    color:${props=>props.theme['base-subtitle']};
  }
  p:nth-child(2){
    font-size:0.75rem;
  }
  span {
    font-weight:bold;
    text-align:right;
}
`
export const RemoveButton = styled.button`
  background: ${props=>props.theme['base-button']};
  display: flex;
  border-radius: 6px;
  padding: 0px 8px 0px 8px;
  gap:4px;
  color: ${props=>props.theme['base-text']};
  border: none;
  align-items: center;
  height: 32px;
    :hover {
      background: ${props=>props.theme['base-hover']};
      cursor: pointer;
    }
  `
export const SelectedCoffeeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height:32px;
  gap: 0.5rem;
  background: ${props=>props.theme['base-button']};
  border-radius: 6px;
  width: fit-content;
  padding: 0.5rem;

  :hover {
    cursor: pointer;
  }
  p{ 
    font-size:1rem;
    font-weight:bold;
    line-height:18.2px;
    font-family: 'roboto', sans-serif;
    color: ${props=>props.theme['base-text']};
    width:fit-content;
  }
`