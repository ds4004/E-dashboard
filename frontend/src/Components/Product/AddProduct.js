import React, { useState } from "react";
import './AddProduct.css'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const prodSubmit = async () => {
        console.warn(name, price, category, company);

        let userId = JSON.parse(localStorage.getItem("user"));
        console.log(userId._id);
        userId = userId._id;
        let result = await fetch("http://localhost:5000/addProduct", {
            method: "POST",
            body: JSON.stringify({name, price, category, userId, company}),
            headers: {
                "Content-Type" : "application/json",
            },
        })
        result = await result.json();
        console.log(result);
    };

    return (
        <div className="prod-form">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter product name" className="prod-input" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter product price" className="prod-input" onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Enter product category name" className="prod-input" onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Enter product company name" className="prod-input" onChange={(e) => setCompany(e.target.value)} />
            <input type="button" value="Add Product" id="prod-submit" onClick={prodSubmit} />
        </div>
    );
};

export default AddProduct;