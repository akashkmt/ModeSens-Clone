import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Footer} from "./component/Footer/Footer"
import AddToCart from './page/AddToCart';
// import Checkout from './Components/Checkout/Checkout';

function App() {
  return (<>
  
  <Navbar/>
  <Routes>
  
    <Route path="/checkout" element={<Checkout></Checkout>}></Route>
    <Route path="/" element={<AddToCart></AddToCart>}></Route>
  </Routes>
   
     <Footer/>
  </>
  );
}

export default App;
