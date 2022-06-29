import { useParams } from "react-router-dom";
import React from "react";

const ItemDetails=()=>{
    const { productId } = useParams();
    var currentLocation = window.location.pathname;
    console.log(currentLocation)

    return(
        <h1>{currentLocation}</h1>
    )
}
export default ItemDetails;