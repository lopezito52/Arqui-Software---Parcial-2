// products-service/products-service.js
const express = require('express');
const app = express();
app.use(express.json());
let products = [{ id:1, name:'Laptop', price:1200 }];

app.get('/products', (req,res)=> res.json(products));
app.post('/products', (req,res)=>{
  const id = products.length ? products[products.length-1].id+1 : 1;
  const p = { id, ...req.body };
  products.push(p);
  res.status(201).json(p);
});
app.listen(3002, ()=> console.log('Products service on http://localhost:3002'));
