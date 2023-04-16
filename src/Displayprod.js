import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
export default function Displayprod() {
    const [prod, setProd] = useState({});
    const { productId} = useParams()
    console.log(useParams());
    useEffect(() => {
        
        fetch("https://localhost:7198/API/Nimaps/" + productId)
            .then(res => res.json())
            .then((result) => { setProd(result);
            
            }
            );
    }, {}); 
    return (
        <div>
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
        </div>
    );
}