import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import ProductList from '../components/ProductList'


const HomeContainer = styled.div`

`

export default function Home() {
  return (
    <HomeContainer>
        <Header/>
      <ProductList/>


    </HomeContainer>
  )
}
