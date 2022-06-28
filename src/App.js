import './App.css';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom"
import {Footer} from "./component/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
