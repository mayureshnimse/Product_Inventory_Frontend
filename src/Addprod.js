import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

    


function Addprod() {
    const [prod, setProd] = useState({});
  
    let navigate = useNavigate();
   
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProd(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        let demo = JSON.stringify(prod);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7198/API/Nimaps/" , {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r.json()) })
        e.preventDefault();
        navigate('/');

       
    }
    return (
        <form onSubmit={handleSubmit}>
                      
            <label>ProductName:</label>
            <input
                type="text"
                name="ProductName"
                value={ prod.ProductName || ""}
                onChange={handleChange}
            />
            <br />            
            <label>CategoryId:</label>
            <input
                type="text"
                name="CategoryId"
                value={ prod.CategoryId|| ""}
                onChange={handleChange}
            />
            <br />     
            <label>CategoryName:</label>
            <input
                type="text"
                name="CategoryName"
                value={ prod.CategoryName|| ""}
                onChange={handleChange}
            />
            <br />                
           
             <input type="submit" />
        </form>
    );
}
export default Addprod;
