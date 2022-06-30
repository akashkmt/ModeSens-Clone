import React from 'react';

import Men from "./Components/Page/Men";
import Women from './Components/Page/Women';
import Beauty from './Components/Page/Beauty';
import ItemDetails from './Components/Page/ItemDetails';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Checkout from './Components/Checkout/Checkout';
import {Footer} from './Components/Footer/Footer';


function App() {
  return (
    
      <div className='App' style={{textAlign:'center'}} >
        <Navbar />
      <Routes>
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
