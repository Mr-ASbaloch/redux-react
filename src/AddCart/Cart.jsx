import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const items = useSelector (state => state)
 
    const total = items.cart.reduce((a ,b)=>(a + b.price , 0 ))
  return (
    <div>
    <h1> total items :{items.cart.length} price : {total}</h1>
    </div>
  )
}

export default Cart