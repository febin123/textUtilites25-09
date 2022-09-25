import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Route,

//   Switch
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const[greenMode,setGreenMode]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        message:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enabled","success")
      document.title='Text Converter-Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
      document.title='Text Converter-Light Mode'
    }
  }
  /*Enable green mode */
  const toggleModeGreen=()=>{
    if(greenMode==='light'){
      setGreenMode('green')
      document.body.style.backgroundColor='green'
      showAlert("Green Mode has been enabled","success")
      document.title='Text Converter-Green Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
      document.title='Text Converter-Light Mode'
    }
  }
  return (
    <>
     
        <Navbar sub1="HOME" sub2="ABOUT" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen}/>
        <Alert alert={alert}/>
        <div className="container my-4">
        <TextForm heading="Enter the value to be evalued" mode={mode} showAlert={showAlert} />
  
       
        </div>

       {/* <div className="container my-4">
        <About/>
        </div> */}

       
    </>
          
  );
}

export default App;
