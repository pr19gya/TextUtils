
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode=(cls)=>{
    console.log(primary);
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container">
      <Routes>
      <Route path="/about" element={<About />} />
          
          <Route path="/">
            
            {/* <Textform showAlert={showAlert} heading="Enter your text to analyze"/> */}
       <Route path="/" element={<Textform heading="Enter the text to analyze below" showAlert={showAlert}/>} /> 
          </Route>
         </Routes>
        </div>
        </Router>
      
      {/* <About/> */}
      
      


      
    </>
  );
}

export default App;
