import React from 'react';
import ToDo from './ToDo';

function TodoList({ todos, removeTodo, editTodo }) {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center flex-col bg-rose-200 w-[500px] rounded-xl my-10 py-6">
        {todos.map((todo, index) => {
          return (
            <ToDo
              title={todo.title}
              id={todo.id}
              removeTodo={removeTodo}
              editTodo={editTodo}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList