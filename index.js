const express = require('express');
const connection = require('connection')
const cors = require('cors');
const todos = require('./routes/todos');

const app = express();

connection()

app.use(express.json());
app.use(cors());
app.use('/api/todos',todos);

const port = process.env.PORT || 8080 ;
app.listen(port, ()=>console.log("Listening to port " + port));