import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export default function Editprod() {
    const [prod, setProd] = useState({});
    const { ProductId } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7198/API/Nimaps/" + ProductId)
            .then(res => res.json())
            .then((result) => {
                setProd(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProd(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        let demo = JSON.stringify(prod);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7198/API/Nimaps/" + ProductId, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        e.preventDefault();
        navigate('/');

        alert(prod);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>ProductId:</label>
            <input
                type="text"
                name="ProductId"
                value={prod.ProductId || ""}
                onChange={handleChange}
            />
            <br />            <label>ProductName:</label>
            <input
                type="text"
                name="ProductName"
                value={prod.ProductName || ""}
                onChange={handleChange}
            />
            <br />            <label>CategoryId:</label>
            <input
                type="text"
                name="CategoryId"
                value={prod.CategoryId || ""}
                onChange={handleChange}
            />
            <br />            
            <label>CategoryName:</label>
            <input
                type="text"
                name="CategoryName"
                value={prod.CategoryName || ""}
                onChange={handleChange}
            />
            <br />        
             
             <input type="submit" />
        </form>
    );
}