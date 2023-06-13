const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false
  };
  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
