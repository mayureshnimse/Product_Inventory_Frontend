import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export default function Deleteprod() {
    const [prod, setProd] = useState({});
    const { ProductId } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7198/API/Nimaps/" + ProductId)
            .then(res => res.json())
            .then((result) => { setProd(result); }
            );
    }, {});
    const handledelete = (event) => {
        alert(ProductId);
        fetch("https://localhost:7198/API/Nimaps/" + ProductId,
            {
                method: 'Delete'
            })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
            }); 
            navigate('/');
    }
    return (
        <div>
            <h1>Are you sure?</h1>
            <table border="5">
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>CategoryId</th>
                        <th>CategoryName</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{prod.ProductId}</td>
                        <td>{prod.ProductName}</td>
                        <td>{prod.CategoryId}</td>
                        <td>{prod.CategoryName}</td>
                        
                    </tr>
                </tbody>
            </table>
            <form>
                <button onClick={handledelete}>Delete</button>
            </form>
        </div>
    );

}