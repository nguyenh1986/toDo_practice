const Todo = require('../models/todo')

function todoView(req, res) {
    const todoList = Todo.getAll()
    res.render('index', { todoList })
}

function addItem(req, res) {
    const todo = req.body.todo
    Todo.addItem(todo)
    res.redirect('/')
}

function deleteById(req, res) {
    const id = req.params.id
    Todo.deleteById(id)
    res.redirect('/')
}

module.exports = {
    todoView,
    addItem,
    deleteById
}