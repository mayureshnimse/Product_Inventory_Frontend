import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export function Listproduct(props) {

    const [products, setProduct] = useState([]);
    const chks=sessionStorage.getItem("key");
    let navigate = useNavigate();     
    useEffect(() => {
      if(chks==="")
     {
      navigate("/");
     }
        fetch("https://localhost:7119/api/Products/")
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, []);
    return (
        <div>
          <h2>Product List</h2>
          <table>
            <thead>
              <tr>
                <th>ProductId<hr/></th>
                <th>ProductName<hr/></th>
                <th>CategoryId<hr/></th>
                <th>CategoryName<hr/></th>
               
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <tr key={prod.productId}>
                  <td>{prod.productId}</td>
                  <td>{prod.productName}</td>
                  <td>{prod.categoryId}</td>
                  <td>{prod.categoryName}</td>
                  <hr/>
                  <td><a href= {"/Editprod/"+prod.productId}>Edit</a></td>
                  <td><a href= {"/Displayprod/"+prod.productId}>Display</a></td>
                  <td><a href= {"/Deleteprod/"+prod.productId}>Delete</a></td>
              
                </tr>
              ))}
            </tbody>
          </table>
     </div>
      );
    }

    export default Listproduct;