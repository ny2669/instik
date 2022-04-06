import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`

width: 100%;
background-color: pink;
min-height: 100px;
padding: 20px;
display: flex;
align-items: center;
box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.5);

`

const Title = styled.h1`
font-family: 'Times New Roman', Times, serif;
font-weight: bold;
`

export default function Header() {
  return (
    <HeaderContainer>
<Title>Header</Title>
    </HeaderContainer>
  )
}
