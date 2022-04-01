const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
    try {
        const newTodo = await new Todo(req.body).save();
        res.send(newTodo);
    } catch (error) {
        res.send(error);
    }
});

router.get('/',(req, res) => {
    try {
        const todo = await Todo().find();
        res.send(todo);
    } catch (error) {
        res.send(todo);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const todoToUpdate = await Todo().findOneAndUpdate(
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