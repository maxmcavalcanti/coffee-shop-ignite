import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6.5rem;

  nav {
    display: flex;
    align-items:center;
    gap: 12px;
  }  
`;

export const BaseIconContainer = styled.span`
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.5rem;
    border-radius: 6px;
    vertical-align:top;
`

export const MapIconContainer = styled(BaseIconContainer)`
  background-color: ${props=>props.theme['purple-light']};
` 

export const CartIconContainer = styled(BaseIconContainer)`
  background-color: ${props=>props.theme['yellow-light']};
   
}
` 

export const Badge = styled.span`
  background-color: ${props=>props.theme['yellow-dark']};
  color: ${props=>props.theme['white']};
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  margin-left: 1.25rem;
  margin-top: -2.25rem;

  `