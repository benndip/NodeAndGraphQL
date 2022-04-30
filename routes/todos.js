const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/', async(req, res) => {
    try {
        const newTodo = await new Todo(req.body).save();
        res.send(newTodo);
    } catch (error) {
        res.send(error);
    }
});

router.get('/', async(req, res) => {
    try {
        const todos = await Todo.find();
        console.log(todos);
        console.log("Hello success");
        return res.json(todos);
    } catch (error) {
        console.log("Hello error", error.message);
        res.send(error);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const todoToUpdate = await Todo.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(todoToUpdate);
    } catch (error) {
        
    }
});

router.delete('/:id', async(req, res)=>{
    try {
        const deletedTodo = await Task.findByIdAndDelete(req.params.id);
        res.send(deletedTodo);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;