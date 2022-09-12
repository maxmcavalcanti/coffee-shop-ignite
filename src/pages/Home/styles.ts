import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const MainContainer = styled.main `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5% 10%;

`

export const TextContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 650px;
  @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      text-align: center;
    }
  `

export const TextContainerTop = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${props=>props.theme['base-title']};
    margin-bottom: 1rem;
  }
  p {
    font-size:1.25rem;
    line-height: 130%;
    color: ${props=>props.theme['base-subtitle']};
  }

`
export const TextContainerBottom = styled.div `
  gap: 1.25rem 3rem;
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: auto auto;
  
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`

export const ImageContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: 500px;
  padding: 1.5rem;

  img {
    width: 100%;
  }

    @media (max-width: 768px) {
      display: none;
    }
`

export const IconContainer = styled.span `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  font-size: 1rem;
  line-height: 130%;
  color: ${props=>props.theme['base-text']};
  

`

export const IconRadiusCircleBase = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    gap: 0.5rem;
    padding: 0.5rem;
  `

export const IconRadiusCircleCart = styled(IconRadiusCircleBase) `
  background-color: ${props=>props.theme['yellow-dark']};
`
export const IconRadiusCirclePackage = styled(IconRadiusCircleBase) `
  background-color: ${props=>props.theme['base-text']};
`
export const IconRadiusCircleTimer = styled(IconRadiusCircleBase) `
  background-color: ${props=>props.theme['yellow']};
`
export const IconRadiusCircleCoffee = styled(IconRadiusCircleBase) `
  background-color: ${props=>props.theme['purple']};
`

// Cards container

export const CardsContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem;
  gap:2rem;
  margin-bottom: 10rem;

  `