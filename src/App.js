// import logo from './logo.svg';
import { useState } from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Navbar from  './Components/Navbar.js' ;
import TextForm from  './Components/TextForm.js' ;
import Alert from './Components/Alert.js';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  let showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  let removeClass=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  let toggleTheme = (cls)=>{
    // console.log(cls)
    removeClass();
    document.body.classList.add("bg-" + cls);
  }
  let toggleMode = ()=>{
    removeClass();
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#00004d";
      showAlert('Dark mode have been enabled','success');
        document.title= 'React App | Dark Theme';
    } else{
      setMode('light')
      document.body.style.backgroundColor = "#fff";
      showAlert('Light mode have been enabled','success')
      document.title= 'React App | Light Theme';
    }
  }
  return (
    <>
    {/* <Router> */}
    <div className="App">
      <Navbar title="Text Utils2" mode = {mode} toggleMode={toggleMode} toggleTheme={toggleTheme}/>
      <Alert alert={alert}/>
      < TextForm mode = {mode} alert={showAlert} />
      {/* <Routes> */}
        {/* <Route exact path="/" element={< TextForm mode = {mode} alert={showAlert} />} /> */}
        {/* <Route exact path="/about" element={<About mode = {mode} />} /> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
