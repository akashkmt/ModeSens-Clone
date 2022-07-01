import React from 'react'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

function PaymentForm({setCardNumber,setCardThru,setCardCVV}) {
  
  const handleChangeCardNumber = (e) => {
    setCardNumber(e.target.value);
  }
  const handleChangeCardThru = (e) => {
    setCardThru(e.target.value);
  }
  const handleChangeCardCVV = (e) => {
    setCardCVV(e.target.value);
  }

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
    <div style={{ borderTop:"2px solid gray", padding:"10px", paddingTop:"20px", display:"flex", flexDirection:"row", justifyContent:"center",gap:"50px"}}>
      <div style={{ display:"flex", gap:"10px"}}>
      <img style={{height:"30px",margin:"auto"}} src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-2-icon-7.png" alt="" />
      <span style={{margin:"auto"}} >Pay with Card </span>
      </div>
      <PaymentInputsWrapper {...wrapperProps} >
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps({onChange: handleChangeCardNumber})} />
      <input {...getExpiryDateProps({onChange: handleChangeCardThru})} />
      <input {...getCVCProps({onChange: handleChangeCardCVV})} />
    </PaymentInputsWrapper>
   </div>
  );
}

export default PaymentForm;