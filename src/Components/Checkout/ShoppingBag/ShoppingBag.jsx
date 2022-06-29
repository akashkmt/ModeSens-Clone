import React from 'react';
import ItemCard from './ItemCard/ItemCard';

function ShoppingBag({cart}) {
  return (
    <div style={{ width: '930px', margin:'auto'}}>
      <p style={{textAlign:'left', fontWeight:'600', letterSpacing:'1px'}}>SHOPPING BAG</p>
      {cart?.map(item => <ItemCard item={item} key={item.id}/>)}
    </div>
  )
}

export default ShoppingBag