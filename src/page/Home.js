import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import ProductList from '../components/ProductList'


const HomeContainer = styled.div`

`

export default function Home() {

  const [hovered, setHovered] = useState(false)
 
  return (
    <HomeContainer>
        <Header/>
      <ProductList hovered={hovered} setHovered={setHovered}/>


    </HomeContainer>
  )
}
