import { useParams } from "react-router-dom";
import React from "react";

const ItemDetails=()=>{
    const { productId } = useParams();
    console.log(productId)
    var currentLocation = window.location.pathname;
    console.log(currentLocation)
    // fetch('http://localhost:8080')

    return(
        <h1>{currentLocation}{'--'}{productId}</h1>
    )
}
export default ItemDetails;