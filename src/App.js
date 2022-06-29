import './App.css';
 import Home from './Components/Home/Home';
 import {Route ,Routes} from 'react-router-dom'
function App() {
  return (
    <>
     <Routes>
     
      {/* please Install These Packages : 
       for image slider :
             npm i react-material-ui-carousel
             npm i @mui/icons-material,
             npm i @mui/material,

          for brand carosal : 
             npm i slick-carousel
             npm i react-icons
             npm install react-slick
          for tending , community:
            npm i react-items-carousel */}
      <Route path="/" element={<Home></Home>}/>
     
     </Routes>
    </>
  );
}

export default App;
