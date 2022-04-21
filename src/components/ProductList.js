import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { context } from './Content'


export const ImageContainer = styled.div`

width: 100%;
display: flex;
justify-content: space-around;
flex-direction: column;
flex-wrap: wrap;
@media (min-width: 700px){

    flex-direction: row;
}
`

export const Card = styled.div`
width: 300px;
margin: 20px auto;
position: relative;

`

 export const Image = styled.img`
width: 100%;
object-fit: cover;
@media (min-width: 700px){

flex-direction: row;
}

`

const Icons = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
position: absolute;
top: 5%;

`


export default function ProductList(props) {
  
const {addToCart, products, isFavourite, AddToFavouries} = useContext(context)



const heart = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>

const plus = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightblue" class="bi bi-bag-plus" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>


  return (
    <>
    <ImageContainer>

        {products.map(item => (
           <Card key={item.id} onMouseEnter={() => props.setHovered(true)} onMouseLeave={()=> props.setHovered(false)}>
<Image src={item.image} alt={item.title}/>
<Icons>
  <div onClick={() => AddToFavouries(item)}>{props.hovered && <span>{heart} </span> }
</div>

  <div onClick={() => addToCart(item)}>{props.hovered && plus}
  </div>
  </Icons>

</Card>
        ))}

    </ImageContainer>
    
    
   
    
</>
  )
}
