import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { context } from './Content'

const HeaderContainer = styled.div`

width: 100%;
background-color: pink;
min-height: 100px;
padding: 5px;
display: flex;
align-items: center;
box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.5);
justify-content: space-around;

`

export const Title = styled.h1`
font-family: 'Times New Roman', Times, serif;
font-weight: bold;
`

const Links = styled(Link)`
text-decoration: none;
color: white;
`

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>

export default function Header() {

  const {cart} = useContext(context)
  return (
    <HeaderContainer>
<Links to='/'><Title>Instik</Title></Links>
<Link to='/cart'><span>{cartIcon}({cart.length > 0 ? cart.length : 0})</span></Link>
    </HeaderContainer>
  )
}
