import React, {useContext} from 'react'
import CartItem from './CartItem'
import { context } from './Content'
import FavItem from './FavItem'
import Header from './Header'








export default function () {
  const {favourites} = useContext(context)

  const showFavs = favourites.map(item => <FavItem item={item}/>)
  console.log(showFavs)
  return (
    <div>
      <Header/>
        <h1>Favourites</h1>

        {showFavs}


    </div>


  )
}
