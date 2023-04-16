import { useState } from "react";
import {Outlet,Link, useNavigate } from "react-router-dom";

  
function App() {
 const [isloggedin,setLoggedin]=useState(null);
 const [readval,setVal]=useState(" ");
 const handeldata=(event)=>{
    setVal(event.target.value);
 };
 const navigate=useNavigate();
   const check= (event)=>{
   if (event.target.value==="LoggedIn"){
   const data={readval};
    sessionStorage.setItem("key",JSON.stringify(data))
     setVal(" ");
  setLoggedin(true)
   }
 else 
 {
  sessionStorage.setItem("key","")
    setLoggedin(false)
   navigate("/");
 }
}
  
  return (
    <div>
      <nav>
        <ul>
          <li>     <Link to="/Home">Home</Link> </li>
          <li>     <Link to="/Contactus">Contactus</Link> </li>
          <li>     <Link to="/Listproduct">Listproduct</Link> </li>
          <li>     <Link to="/Addprod">Addprod</Link> </li>
        </ul>
      </nav>
      
      <Outlet />
        
     </div>

  );
}

export default App;
