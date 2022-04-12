import React, { useState, useContext } from 'react'
import Header, {Title} from './Header'
import ProductList from './ProductList'
import { context } from './Content'
import CartItem from './CartItem'
import styled from 'styled-components'


const Titles = styled.h1`
text-align: center;

`

export default function Cart() {



  const {cart} = useContext(context)



 const cartList = cart.map(item => <CartItem item={item}/>)
  

const Total = cart.map(item => item.price)

const GrandT = Total * CartItem.length

const test = toString(GrandT)

console.log(test)

  return (
    <>
    <Header/>
    <Titles> ({cart.length <= 0 ?  'Your Cart is empty'  :  ' Items in Cart' + ' ' + cart.length } )</Titles>

    {cartList}

    {/* <p>Total: {toLocaleString("en-GB", {style: "currency", currency: "GBP"})} </p> */}
<br/>
<button>Place Order</button>
    </>
  )
}
