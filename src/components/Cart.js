import React, { useState, useContext } from 'react'
import Header, {Title} from './Header'
import { context } from './Content'
import styled from 'styled-components'
import CartItem from './CartItem'




const Titles = styled.h1`
text-align: center;

`

export default function Cart() {

const [placeOrder,setplaceOrder] = useState('Place Order')

const {cart , products, setCart, emptyCart} = useContext(context)

let total = 0

const test = cart.map(items => {

  total = total + items.price 

return total  

})

const PlaceOrder = () => {
  setplaceOrder('ordering...')
  setTimeout(() =>{

    setplaceOrder('Order Complete')
    emptyCart()
    setTimeout(() => {
      setplaceOrder('Place Order')
    }, 1000)
  
    
  }, 3000)
  
}







 const cartList = cart.map(item => <CartItem key={item.id} item={item}/>)
  


  return (
    <>
    <Header/>
    <Titles> ({cart.length <= 0 ?  'Your Cart is empty'  :  ' Items in Cart' + ' ' + cart.length } )</Titles>

    {cartList}



    <p>Total: {total.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}  </p>

<br/>
{cart.length > 0 ? <button onClick={PlaceOrder}>{ placeOrder}</button> : null}
    </>
  )
}
