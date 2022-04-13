import React, { useState, useContext } from 'react'
import Header, {Title} from './Header'
import { context } from './Content'
import styled from 'styled-components'
import CartItem from './CartItem'




const Titles = styled.h1`
text-align: center;

`

export default function Cart(item) {



const {cart , products} = useContext(context)

let whT = 0

const test = cart.map(items => {

  whT = whT + items.price 

return whT  

})




const display = test.toLocaleString("en-US", {style: "currency", currency: "USD"})


 const cartList = cart.map(item => <CartItem key={item.id} item={item}/>)
  


  return (
    <>
    <Header/>
    <Titles> ({cart.length <= 0 ?  'Your Cart is empty'  :  ' Items in Cart' + ' ' + cart.length } )</Titles>

    {cartList}



    <p>Total: {whT.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}  </p>

<br/>
<button>Place Order</button>
    </>
  )
}
