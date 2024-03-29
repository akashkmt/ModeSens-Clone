import React from 'react';
import ItemCard from './ItemCard/ItemCard';

function ShoppingBag({cart,handleDeleteItemInCart, clickedOnCheckout}) {
  return (
    <div style={{ width: '930px', margin:'auto'}}>
      <p style={{textAlign:'left', fontWeight:'600', letterSpacing:'1px'}}>SHOPPING BAG</p>
      {cart?.map((item,i) => <ItemCard item={item} clickedOnCheckout={clickedOnCheckout} handleDeleteItemInCart={handleDeleteItemInCart} key={i}/>)}
    </div>
  )
}

export default ShoppingBag