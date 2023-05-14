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
          <li>     <Link to="/Listproduct">List of Products</Link> </li>
          <li>     <Link to="/Addprod">Add Product</Link> </li>
        </ul>
      </nav>

      <span><input type="text" value={readval} onInput={handeldata}/></span>
      {isloggedin?      
        <button  onClick={check} value="LoggedOut">LoggedOut</button>
      :
      <button onClick={check} value="LoggedIn">LoggedIn</button>
      }
      
      <Outlet />
        
     </div>

  );
}

export default App;
