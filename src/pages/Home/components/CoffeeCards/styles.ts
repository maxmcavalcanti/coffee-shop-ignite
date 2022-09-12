import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:20%;
  text-align:center;

  img{
    width:120px;
  }
  span{
    color:${props=>props.theme['yellow-dark']};
    background: ${props=>props.theme['yellow-light']};
    padding:4px 8px;
    border-radius: 100px;
    font-weight:bold;
    margin-top:0.75rem;
    margin-bottom:1rem;
    font-size:0.625rem;
  }

  h2{
    font-size:1.25rem;
    font-weight:bold;
    line-height:130%;
    align-self: center;
    font-family: 'baloo 2', cursive;
    color: ${props=>props.theme['base-subtitle']};
  }

  p{
    font-size:0.875rem;
    line-height:18.2px;
    align-self: center;
    color: ${props=>props.theme['base-label']};
    width:80%;
  }
`

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
`


export const PriceCartZone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height:38px;
  margin-top:2rem;


  p{ 
    font-size:0.875rem;
    font-weight:400;
    line-height:18.2px;
    font-family: 'roboto', sans-serif;
    color: ${props=>props.theme['base-text']};
  }
  span{
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    font-size:1rem;
    font-weight:bold;
    background:${props=>props.theme['purple-dark']};
    height:fit-content;
    border-radius: 6px;
    margin:0;

    :hover {
      color: ${props=>props.theme['base-text']};
      background:${props=>props.theme['purple']};
      cursor: pointer;
    }
  }
  h2 {
    font-size:1.5rem;
    font-family: 'baloo 2', cursive;
    font-weight: bold;
    color: ${props=>props.theme['base-text']};
    margin-left: 0.25rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:38px;
  gap: 0.5rem;
  margin:0 8px 0 23px;

  p{ 
    font-size:0.875rem;
    font-weight:400;
    line-height:18.2px;
    font-family: 'roboto', sans-serif;
    color: ${props=>props.theme['base-text']};
    width:fit-content;
  }

  :hover{
    cursor:pointer;
  }
`