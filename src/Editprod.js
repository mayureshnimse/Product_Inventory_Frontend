import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export default function Editprod() {
    const [prod, setProd] = useState({});
    const { productId } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7119/api/Products/" + productId)
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
        fetch("https://localhost:7119/api/Products/" + productId, {
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
            <label>productId:</label>
            <input
                type="text"
                name="productId"
                value={prod.productId || ""}
                onChange={handleChange}
            />
            <br />            <label>productName:</label>
            <input
                type="text"
                name="productName"
                value={prod.productName || ""}
                onChange={handleChange}
            />
            <br />            <label>categoryId:</label>
            <input
                type="text"
                name="categoryId"
                value={prod.categoryId || ""}
                onChange={handleChange}
            />
            <br />            
            <label>categoryName:</label>
            <input
                type="text"
                name="categoryName"
                value={prod.categoryName || ""}
                onChange={handleChange}
            />
            <br />        
             
             <input type="submit" />
        </form>
    );
}