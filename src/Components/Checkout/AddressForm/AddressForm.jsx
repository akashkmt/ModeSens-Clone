import React from "react";
import "./AddressForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function AddressForm({setClickedOnCheckout, setClickedOnPaymentMethod }) {
  return (
    <div style={{ width: "930px", margin: "auto" }}>
      <p style={{ textAlign: "left", marginBottom: "-5px" }}>
        <span
          onClick={() => {
            setClickedOnCheckout(false);
            setClickedOnPaymentMethod(false);
          }}
          className="backToBag"
        >
          Back To Bag
        </span>
      </p>
      <p style={{ textAlign: "left", fontWeight: "600", letterSpacing: "1px" }}>
        YOUR SHIPPING ADDRESS
      </p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="formDivForAddress">
          <TextField
            required
            id="first-name"
            label="First Name"
            defaultValue=""
            variant="standard"
          />
          <TextField
            required
            id="last-name"
            label="Last Name"
            defaultValue=""
            variant="standard"
          />
          <TextField
            disabled
            id="country-name"
            label="Country"
            defaultValue="India"
            variant="standard"
          />
          <TextField
            required
            id="address-1"
            label="Address 1"
            defaultValue=""
            variant="standard"
          />
          <TextField
            // required
            id="address-2"
            label="Address 2"
            defaultValue=""
            variant="standard"
          />
          <TextField
            required
            type={"tel"}
            id="zip-code"
            label="Zip Code"
            defaultValue=""
            variant="standard"
          />
          <TextField
            required
            id="city-name"
            label="City"
            defaultValue=""
            variant="standard"
          />
          <TextField
            required
            id="state-name"
            label="State"
            defaultValue=""
            variant="standard"
          />
          <TextField
            required
            type={"tel"}
            id="phone-number"
            label="Phone Number"
            defaultValue=""
            variant="standard"
          />
          
        </div>
      </Box>
    </div>
  );
}

export default AddressForm;
