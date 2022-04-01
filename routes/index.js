var express = require('express');
var router = express.Router();
const todoController = require('../controller/todoController')

/* GET home page. */
router.get('/', todoController.todoView);

router.post('/todos', todoController.addItem);
router.delete('/todos/:id', todoController.deleteById)
module.exports = router;
