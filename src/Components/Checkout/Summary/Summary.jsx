import React from 'react'
import PaymentForm from '../PaymentForm/PaymentForm'
import "./Summary.css"

function Summary({cart, clickedOnCheckout, setClickedOnCheckout,clickedOnPaymentMethod, setClickedOnPaymentMethod}) {
  
  return (
    <div style={{ width: '930px', margin:'auto'}}>
      <p style={{textAlign:'left', fontWeight:'600', letterSpacing:'1px'}}>SUMMARY</p>
      <div style={{border:"7px solid #f5f5f5"}}>
      <div  className='summary-box'>
        <div>
          <span>Currency</span>
          <span>USD</span>
        </div>
        <div>
          <span>{`${cart.length} Items`}</span>
          <span>{`$ `} 
            {
              cart.reduce((acc, item) => {return acc + item.price},0)
            }
            .00
          </span>
        </div>
        {
          clickedOnCheckout ? <div>
          <span>Shipping Fee</span>
          <span>{`$ `} 
            {
              Math.round(((cart.reduce((acc, item) => {return acc + item.price},0))*3)/100)
            }
            .00
          </span>
        </div> : null
        }
        {
          clickedOnCheckout ? <div>
          <span>Tax</span>
          <span>{`$ 0.00`}</span>
        </div> : null
        }
        {
          clickedOnCheckout ? <div style={{borderTop:"2px solid #f5f5f5", paddingTop:"10px"}}>
          <span>ESTIMATED TOTAL</span>
          <span>{`$ `}{Math.round(((cart.reduce((acc, item) => {return acc + item.price},0))*3)/100)+cart.reduce((acc, item) => {return acc + item.price},0)}.00</span>
        </div> : null
        }
        
        {
          clickedOnCheckout && !clickedOnPaymentMethod ? <div className='mainDivForPaymentMethods'>
            <div className='paymentMethodsBox'>
            <div onClick={()=>{setClickedOnPaymentMethod(true)}}>
              <img className='methodImage methodForMargin1' src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-2-icon-7.png" alt="" />
              <span>Card</span>
            </div>
            <div>
            <img className='methodImage methodForMargin2' src="https://freepngimg.com/save/13625-paypal-logo-transparent-png/1817x1266" alt="" />
              <span>PayPal</span>
            </div>
            <div>
            <img className='methodImage methodForMargin3' src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.png" alt="" />
              <span>Google Pay</span>
            </div>
            <div>
            <img className='methodImage methodForMargin4' src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/13_Alipay_logo_logos-512.png" alt="" />
              <span>Alipay</span>
            </div>
            <div>
            <img className='methodImage methodForMargin5' src="https://www.clipartmax.com/png/full/184-1841894_free-wechat-icon-png-wechat-pay-logo-vector.png" alt="" />
              <span>WeChat</span>
            </div>
          </div>
          </div> : clickedOnCheckout && clickedOnPaymentMethod ? <PaymentForm /> : null
        }
        
      </div>
      {
        clickedOnCheckout ? <button className='checkOutBtn' >PLACE ORDER</button> : <button onClick={() => {setClickedOnCheckout(!clickedOnCheckout)}} className='checkOutBtn' >GO TO CHECKOUT</button>
      }
      </div>
      {
        clickedOnCheckout ? <p style={{textAlign:"left",fontSize:"14px", fontWeight:"500", letterSpacing:".5px"}}>By placing order you agree to <u>ModeSens Terms</u>. An authorization hold will be placed on your payment method. The funds will only be captured if your order can be confirmed.</p> : null
      }
    </div>
  )
}

export default Summary