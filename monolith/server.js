// monolith/server.js
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id:1, name:'Alice', email:'alice@example.com'}];
let products = [{ id:1, name:'Laptop', price:1200 }];

// USERS
app.get('/users', (req,res)=> res.json(users));
app.post('/users', (req,res)=>{
  const id = users.length ? users[users.length-1].id+1 : 1;
  const u = { id, ...req.body };
  users.push(u);
  res.status(201).json(u);
});
app.put('/users/:id', (req,res)=>{
  const id = +req.params.id;
  const idx = users.findIndex(u=>u.id===id);
  if(idx===-1) return res.status(404).send('Not found');
  users[idx] = { id, ...req.body };
  res.json(users[idx]);
});
app.delete('/users/:id', (req,res)=>{
  const id = +req.params.id;
  users = users.filter(u=>u.id!==id);
  res.status(204).send();
});

// PRODUCTS
app.get('/products', (req,res)=> res.json(products));
app.post('/products', (req,res)=>{
  const id = products.length ? products[products.length-1].id+1 : 1;
  const p = { id, ...req.body };
  products.push(p);
  res.status(201).json(p);
});
app.put('/products/:id', (req,res)=>{
  const id = +req.params.id;
  const idx = products.findIndex(p=>p.id===id);
  if(idx===-1) return res.status(404).send('Not found');
  products[idx] = { id, ...req.body };
  res.json(products[idx]);
});
app.delete('/products/:id', (req,res)=>{
  const id = +req.params.id;
  products = products.filter(p=>p.id!==id);
  res.status(204).send();
});

app.listen(3000, ()=> console.log('Monolith running on http://localhost:3000'));
