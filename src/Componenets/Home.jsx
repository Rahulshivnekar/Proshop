import React from 'react'
import { CartState } from '../Context/Context'
import Filter from './Filter'
import SingleProduct from './SingleProduct'

import "./styles.css"

const Home = () => {
  const {state:{products}}=CartState()
  console.log(products)
  return (
    <div className='home'>
      <Filter/>
      <div className='productContainer'>
        {
          products.map((prod)=>{
           return <SingleProduct prod={prod} key={prod._id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home