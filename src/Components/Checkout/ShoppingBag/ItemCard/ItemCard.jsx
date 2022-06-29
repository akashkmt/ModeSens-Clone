import React from 'react';
import './ItemCard.css';

function ItemCard({item}) {
    // console.log(item);
  return (
    <div className='card-box' key={item.id}>
        <div className='card-box-child-1'>
            <img src={item.image_url[0]} alt="" />
        </div>
        <div className='card-box-child-2'>
            <p>{item.brand}</p>
            <p>{item.title}</p>
            <p>{item.price}.00</p>
            <p>Quantity : 1</p>
        </div>
        <button className='deleteFromCartBtn'>X</button>
    </div>
  )
}

export default ItemCard