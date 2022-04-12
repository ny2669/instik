import React, {useContext} from 'react'
import styled from 'styled-components'
import {ImageContainer, Card, Image} from './ProductList'
import { context } from './Content'


const CartContainer = styled.div`
width: 90%;



`
const Images = styled(Image)`
width: 300px;
`

 const Price = styled.p`
 
 font-weight: bold;
 font-size: 1.5rem;
 
 `

const Wrap = styled.div`
 
 display: flex;
align-items: center;
justify-content: space-around;
margin: 20px auto;

`


export default function CartItem({item, cart}) {
  const {RemoveFromCart} = useContext(context)
  return (
    <CartContainer>

     <Wrap>
     <Images src={item.image} alt={item.title} />
<Price>{`£${Math.round(item.price)}`}</Price>
       </Wrap> 

<br/>

    

<button onClick={() => RemoveFromCart(item.id)}>remove item</button>

</CartContainer>

  )
}
