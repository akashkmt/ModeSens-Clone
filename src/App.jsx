import './App.css';
import React from 'react';
import SignupPopup from './Components/popup/SignUpPopUp';
import {AuthContext} from  './context/AuthContext'
function App() {
  const {isAuth} = React.useContext(AuthContext);
  return (
    <div className="App">
      {isAuth ? <div></div> : <SignupPopup />}
    </div>

  );
}

export default App;
