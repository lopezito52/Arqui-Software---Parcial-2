// users-service/users-service.js
const express = require('express');
const app = express();
app.use(express.json());
let users = [{ id:1, name:'Alice', email:'alice@example.com'}];

app.get('/users', (req,res)=> res.json(users));
app.post('/users', (req,res)=>{
  const id = users.length ? users[users.length-1].id+1 : 1;
  const u = { id, ...req.body };
  users.push(u);
  res.status(201).json(u);
});
app.listen(3001, ()=> console.log('Users service on http://localhost:3001'));
