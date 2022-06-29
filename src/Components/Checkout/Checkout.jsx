import React from 'react'
import AddressForm from './AddressForm/AddressForm'
import ShoppingBag from './ShoppingBag/ShoppingBag'
import Summary from './Summary/Summary'

function Checkout() {
  const [clickedOnCheckout, setClickedOnCheckout] = React.useState(false);
  const [clickedOnPaymentMethod, setClickedOnPaymentMethod] = React.useState(false);
  const id = 1;
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch(`http://localhost:8080/users/${id}`);
        let result = await data.json();
        setCart(result.cart);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  },[])
  return (
    <>
    <h1>NAVBAR</h1>
    <div>
        <h1 style={{color:"#1C1C1C", fontWeight:"700!important", fontSize:"1.7rem"}}>MODESENS CONCIERGE</h1>
        {
          !clickedOnCheckout ? <p style={{color:"#1C1C1C", fontWeight:"500", fontSize:"14px", letterSpacing:'.3px'}}>
          <span>Let ModeSens determine which store fulfill your request to get the best price for the product you want</span>
          <br />
          <span>- enjoy a worry free experience with no additional cost to you.</span>    
      </p> : null
        }
        {
          clickedOnCheckout ? <AddressForm clickedOnCheckout={ clickedOnCheckout } setClickedOnCheckout = {setClickedOnCheckout} clickedOnPaymentMethod={clickedOnPaymentMethod} setClickedOnPaymentMethod={setClickedOnPaymentMethod} /> : null
        }
        <br />
        <ShoppingBag cart={cart} />
        <br />
        <Summary cart={cart} clickedOnCheckout={ clickedOnCheckout } setClickedOnCheckout = {setClickedOnCheckout} clickedOnPaymentMethod={clickedOnPaymentMethod} setClickedOnPaymentMethod={setClickedOnPaymentMethod}/>
    </div>
    <h1>FOOTER</h1>
    </>
  )
}

export default Checkout