import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => { 
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  }

  const editTodo = ({id, newValue}) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      console.log('canceled');
      return;
    }

    setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
  }

  return (
    <div className="container mx-auto">
      <ToDoForm todos={todos} addTodo={addTodo}/>
      {todos.length > 0 && (
        <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo}/>
      )}
    </div>
  );
}

export default App;
