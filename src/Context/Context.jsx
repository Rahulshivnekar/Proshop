import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';


const Cart = createContext()
const Context = ({ children }) => {
  let min = 0;
  let max = 5;

  const products = [...Array(18)].map(() => ({

    _id: faker.string.uuid(),
    price: faker.commerce.price({ min: 100 }),
    product: faker.commerce.product(),
    discription: faker.commerce.productDescription({ min: 10, max: 30 }),
    instock: Math.round(Math.random() * (max - min) + min),
    

  }));


  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })
  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}