import React from 'react';
import Men from "./Components/Page/Men";
import Women from './Components/Page/Women';
import Beauty from './Components/Page/Beauty';
import ItemDetails from './Components/Page/ItemDetails';
import { Routes, Route } from "react-router-dom";
import './App.css'
// import Navbar from './Components/Navbar/Navbar';
import Checkout from './Components/Checkout/Checkout';
import {Footer} from './Components/Footer/Footer';
import Navbar from './Components/Navbars/Navbar';
import Home from './Components/Home/Home';
function App() {
  return (
    
      <div className='App' style={{textAlign:'center'}} >
      <Navbar/>
      <Routes>
        {/* please Install these packages:
        //npm i react-material-ui-carousel
        //npm i slick-carousel
        //npm i react-icons
        //npm install react-slick
        //npm i react-items-carousel    */}
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Mens" element={<Men />} />
        <Route path='/Womens' element={<Women />} />
        <Route path='/Beauty' element={<Beauty />} />
        <Route path="/Checkout" element={ <Checkout />} />
        <Route path='/Mens/:productId'  element={<ItemDetails />}/>
        <Route path='/Womens/:productId'  element={<ItemDetails />}/>
        <Route path='/Beauty/:productId'  element={<ItemDetails />}/>
      </Routes>
      <Footer />
      </div>
    
  );
}

export default App;
