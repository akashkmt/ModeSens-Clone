import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom"
import {Footer} from "./component/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Checkout />
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
