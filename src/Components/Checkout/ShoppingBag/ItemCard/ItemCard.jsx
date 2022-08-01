import React from 'react';
import './ItemCard.css';

function ItemCard({item,handleDeleteItemInCart, clickedOnCheckout}) {
    // console.log(item);
  return (
    <div className='card-box'>
        <div className='card-box-child-1'>
            <img src={item?.image_url[0]?item.image_url[0]: ""} alt="" />
        </div>
        <div className='card-box-child-2'>
            <p>{item?.brand}</p>
            <p>{item?.title}</p>
            <p>{item?.price}.00</p>
            <p>Quantity : 1</p>
        </div>
        {
            ! clickedOnCheckout ? <button onClick={()=> {handleDeleteItemInCart(item.id)}} className='deleteFromCartBtn'>X</button> : null
        }
    </div>
  )
}

export default ItemCard