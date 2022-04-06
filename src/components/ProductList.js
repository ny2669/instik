import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`

width: 100%;
border: 0.5px solid blue;
display: flex;
justify-content: space-around;
flex-direction: column;
margin: 10px auto;
@media (min-width: 700px){

    flex-direction: row;
}
`

const Card = styled.div`
flex: 1;
border: 0.5px solid red;

`

const Image = styled.img`
width: 100%;
object-fit: cover;
@media (min-width: 700px){

flex-direction: row;
}

`






export default function ProductList() {
    const [products, setProducts] = useState([])
    console.log(products)

const urlList = `https://fakestoreapi.com/products`

useEffect(() => {

    fetch(urlList)
    .then(res => res.json())
    .then(data => setProducts(data))

},[])
  return (
    <ImageContainer>

        {products.map(item => (
            <Card>
<Image src={item.image} alt={item.title}/>
</Card>
        ))}

    </ImageContainer>
  )
}
