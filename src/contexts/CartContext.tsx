import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

export interface CartType {
  name : string,
  price : string,
  image_path: string,
  id: number,
  quantity:number
}
export interface FormType {
  cep : string,
  rua : string,
  numero: string,
  complemento: string,
  bairro:string,
  cidade:string,
  uf:string,
  payment: string
}

interface CartContextType {
  cart: CartType[],
  quantity:Number,
  setCart:any,
  setQuantity:any;
  price: string;
  total: Number;
  address: FormType,
  setAddress:any,
}

export const CartContext = createContext({} as CartContextType)




interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({
  children,
}: CartContextProviderProps){

  const [cart, setCart] = useState(()=> {
    const storedStateAsJSON = localStorage.getItem('@ignite-coffee-project: cycles-state-1.0.0');

    if(storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  })
  const [quantity, setQuantity] = useState(1)

  useEffect(()=>{
    const stateJSON = JSON.stringify(cart)
  
    localStorage.setItem('@ignite-coffee-project: cycles-state-1.0.0', stateJSON)
  },[cart])


const [address, setAddress] = useState(()=> {
  const addressStoredAsJSON = localStorage.getItem('@ignite-coffee-project: address-state-1.0.0');

  if(addressStoredAsJSON) {
    return JSON.parse(addressStoredAsJSON)
    }
    return []
    })
  useEffect(()=>{
    const addressJSON = JSON.stringify(address)
  
    localStorage.setItem('@ignite-coffee-project: address-state-1.0.0', addressJSON)
  },[address])   

  
return (
  <CartContext.Provider
    value={{
      cart,
      setCart,
      quantity,
      setQuantity,
      address,
      setAddress,
    }}
  >
    {children}
  </CartContext.Provider>
)

}