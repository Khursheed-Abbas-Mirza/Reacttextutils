
import './App.css';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';


function App() {
  const [dmode,setdmode]=useState('light');
  const [myim,setmyim]=useState('moon')
  const [alert,setalert]=useState(null)  
 const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setalert(null)
  },2000);
 }
  const toggleMode=()=>{
    if(dmode==='light'){
      setdmode('dark')
      setmyim('sun')
      showAlert("Dark Mode has Enabled","success")
      
      document.body.style.backgroundColor="#00003f"
      document.body.style.color="white"
    }
    else{
    
      showAlert("Dark Mode has disabled","success")
      document.body.style.backgroundColor="white"
  
      document.body.style.color="black"
      setmyim('moon')
      setdmode('light')
    }
  }
  return (
   <>
    
   <BrowserRouter>

        <Navbar title="TextUtils"  mode={dmode} togglemode={toggleMode} About={"Aboutus"} myim={myim}/>
        <Alert alert={alert}/>
        {/* <TextForm heading="Text Utils ord Count Remove Extra Spaces..."  mode={dmode} showAlert={showAlert} /> */}
         <div className="container my-3" mode={dmode}>
          <Routes>
            <Route  exact path="/about" element={<About mode={dmode} />} />
          </Routes>
          <Routes>
            <Route  exact path="/" element={ <TextForm heading="Text Utils ord Count Remove Extra Spaces..."  mode={dmode} showAlert={showAlert} />}/>
          </Routes> 
         </div> 
      </BrowserRouter>
   </>
  );
}

export default App;

