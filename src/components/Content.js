import React, {useState, useEffect, createContext} from 'react'
import { NavItem } from 'react-bootstrap'

 const context = createContext()

 function ContextProvider({children}){

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [isFav, setIsFav] = useState(false)
    const [favourites,setFavourites] = useState([])
    
    


   
   

const urlList = `https://fakestoreapi.com/products`

useEffect(() => {
    fetch(urlList)
    .then(res => res.json())
    .then(data => setProducts(data))

},[urlList])

 
const isFavourite = (id) => {

const updatedArr = products.map(photo => {
if(photo.id === id){


    return{

        ...photo, 
        isFav: setIsFav(prevstate => !prevstate.isFav)
        
              
    }}

    return photo
  
    })


}

const addToCart = (cartItem) => {

  setCart(prevItem => [...prevItem, cartItem])

}

const RemoveFromCart = (id) => {
    
    setCart(prevItems => prevItems.filter(item => item.id !== id))
   
  
  }

  function emptyCart() {
    setCart([])
}


const AddToFavouries = (newFave) => {

    setFavourites(prev => [...favourites, newFave])
}




    return(

        <context.Provider value={{products, addToCart, cart, isFavourite, RemoveFromCart, setCart, emptyCart, AddToFavouries, favourites}}>
            {children}
        </context.Provider>
    )
 }

 export  {ContextProvider, context}