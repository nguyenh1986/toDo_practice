const todoList = [] // array of strings

function addItem(item) {
    todoList.push(item)
}

function getAll() {
    return todoList;
}

function deleteById(id) {
    todoList.splice(id, 1)
}

module.exports = {
    addItem,
    getAll,
    deleteById
}