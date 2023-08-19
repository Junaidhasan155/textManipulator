import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
// import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter as Router,
  
//   Routes,
//   Route,
//   // Link,
//   BrowserRouter
// } from "react-router-dom";
// import Forms from './components/Forms';

function App() {
  const [mode, setMode] = useState("dark");
  
  
  // const [alert, setAlert] = useState(null);
//   const showAlert=(message,type)=>{
// setAlert({
//   msg:message,
//   type :type
// })
//   }
  

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "dark" ? "light" : "dark"));
    applyThemeStyles(); // Apply theme styles when the mode is toggled
   
  };

  

  const applyThemeStyles = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#071037";
   
      // Apply other dark theme styles here
    } else {
      document.body.style.backgroundColor = "white";
     
      // Apply other light theme styles here
    }
  };
 

  return (
    <>
   
      <Navbar title="Textutils" mode={mode} about="About-us"  toggleMode={toggleMode} />
      {/* <Alert alert={alert}/> */}
      <div className="container my-4 text-center">
        
       
     
           
         <Textarea title="Enter the Text" mode={mode}  />
         
     
      
         {/* <Aboutus/> */}
       </div>
      
     </>
    
    
  
  );
}
// return (
//   <>
//     <BrowserRouter>
//     <Navbar title="Textutils" mode={mode} About="About"  toggleMode={toggleMode} />

//       {/* <Alert alert={alert} /> */}
//       <div className="container my-3" mode={mode}>
//         {/* <Routes>
//           <Route path="/About.js" element={<About
//            toggleMode={toggleMode}
//            mode={mode}/>} />
//         </Routes> */}
//         {/* <Routes>
//           <Route path='/Forms.js' element={<Forms/>}/>
//         </Routes>
//         <Routes> */}
//           <Route
//             path="/"
//             element={
//               <Textarea
//                 // showAlert={showAlert}
//                 title="Enter the text to analyze below"
//                 mode={mode}
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   </>
// );
// }
export default App;

