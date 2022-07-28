
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import {
 // BrowserRouter as Router,
//  Routes,
//  Route,
  
//} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message ,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(true);
    }, 1000);

  }
  const toggleMode = () => {
     if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='#0b082c';
      showAlert("Dark mode has been enabled","success")
     }
     else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")
    
     }
  
  }
  return  (
    <>
   {/* <Navbar title="TextUtils" aboutText="about us"/>*/}
   {/*<Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
          
    </Routes>
        </div>    
  </Router> */}
            
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      
     
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    
   

    
    
  
    </> 
  );
}

export default App;
