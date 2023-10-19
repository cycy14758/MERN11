import React from 'react'
import Cards from '../Card/card'
import { useSelector } from 'react-redux'
import './cardlist.css'

function Cardlist() {
  const Products=useSelector(state=>state.productReducer.products)
  return (
    <div  className='parent'   >
    {Products.map((el) => <Cards el={el}  />)}

    </div>
  )
}

export default Cardlist