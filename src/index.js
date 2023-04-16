import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contactus from './Contactus';
import Listproduct from './Listproduct';
import Addprod from './Addprod';
import Nopage from './Nopage';
import Displayprod from './Displayprod';
import Editprod from './Editprod';
import Deleteprod from './Deleteprod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
   <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        
        <Route path="Contactus" element={<Contactus />} />
       <Route path="Listproduct" element={ <Listproduct />} />
       
        <Route path="/Displayprod/:productId" element={<Displayprod/>} />
        <Route path="/Editprod/:productId" element={<Editprod/>} />
        <Route path="/Deleteprod/:productId" element={<Deleteprod/>} />
        <Route path="/Addprod/" element={<Addprod/>} />
        <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>     
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
