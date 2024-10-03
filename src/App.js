
import './App.css';
import Navbar from './component/Navbar';
import PropTypes from 'prop-types'
import TextForm from './component/TextForm';
// import About from './component/About';
import React, {useState} from 'react'
import Alert from './component/Alert';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
// }from "react-router-dom";





function App() {
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      });

      setTimeout(()=>{
        setAlert(null);
      },2000)
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor='black';
          showAlert("Dark mode has been Enabled succesfully","success");
        }else{
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been Enabled succesfully","success");
        }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
        {/* <Route exact path="/about" element={ */}
          {/* <About mode={mode} toggleMode={toggleMode}/> */}
          {/* }/> */}
        {/* <Route exact path="/"  */}
         {/* element={ */}
        <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
        {/* }/> */}
      {/* </Routes> */}
    
    
    </div>
    {/* </Router> */}
    </>
    
  );
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps={
  title:'Set title here',
  aboutText:'About'
};


export default App;
