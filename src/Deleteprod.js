import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export default function Deleteprod() {
    const [prod, setProd] = useState({});
    const { productId } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7198/API/Nimaps/" + productId)
            .then(res => res.json())
            .then((result) => { setProd(result); }
            );
    }, {});
    const handledelete = (event) => {
        alert(productId);
        fetch("https://localhost:7198/API/Nimaps/" + productId,
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
                        <th>productId</th>
                        <th>productName</th>
                        <th>categoryId</th>
                        <th>categoryName</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{prod.productId}</td>
                        <td>{prod.productName}</td>
                        <td>{prod.categoryId}</td>
                        <td>{prod.categoryName}</td>
                        
                    </tr>
                </tbody>
            </table>
            <form>
                <button onClick={handledelete}>Delete</button>
            </form>
        </div>
    );

}