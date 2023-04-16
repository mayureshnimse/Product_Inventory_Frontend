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
                      
            <label>productName:</label>
            <input
                type="text"
                name="productName"
                value={ prod.productName || ""}
                onChange={handleChange}
            />
            <br />            
            <label>categoryId:</label>
            <input
                type="text"
                name="categoryId"
                value={ prod.categoryId|| ""}
                onChange={handleChange}
            />
            <br />     
            <label>categoryName:</label>
            <input
                type="text"
                name="categoryName"
                value={ prod.categoryName|| ""}
                onChange={handleChange}
            />
            <br />                
           
             <input type="submit" />
        </form>
    );
}
export default Addprod;
