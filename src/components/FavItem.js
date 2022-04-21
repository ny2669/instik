import React from 'react'
import styled from 'styled-components'


const Image = styled.img`
width: 300px;
`

const ImgContainer = styled.div`
width: 100%;
margin: 0 auto;
padding:  0 20px;

`


export default function FavItem({item}) {
  return (
    <>
    
    <ImgContainer>
        <Image src={item.image}/>
        <p>{item.price.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</p>
        <p>{item.description}</p>
    </ImgContainer>
    </>
  )
}
