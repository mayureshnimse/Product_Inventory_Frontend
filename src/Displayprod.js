import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
export default function Displayprod() {
    const [prod, setProd] = useState({});
    const { ProductId} = useParams()
    console.log(useParams());
    useEffect(() => {
        
        fetch("https://localhost:7198/API/Nimaps/" + ProductId)
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
        </div>
    );
}