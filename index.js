const express = require('express');
const connection = require('./database')
const cors = require('cors');
const todos = require('./routes/todos');
const bodyParser = require('body-parser')

const app = express();

connection()

// app.use(express.json());
app.use(cors());
app.use('/api/todos',todos);
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000 ;
app.listen(port, ()=>console.log("Listening to port " + port));