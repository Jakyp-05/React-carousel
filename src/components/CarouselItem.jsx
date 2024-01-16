import React from 'react'
import "../App.css"

const CarouselItem = ({item}) => {
  return (
    <div className='carousel-item'>
      <div></div>
      <img className='carousel-img' src={item.icon.default} alt='carousel image'/>
      <div className='carousel-item-text'>{item.description}</div>
    </div>
  )
}

export default CarouselItem
