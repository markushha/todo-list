import React, { useState } from 'react'

function ToDoForm({ todos, setTodos, addTodo }) {
  const [title, setTitle] = useState(''); // This is the state for the input field

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    addTodo({
      id: Date.now(),
      title: title
    });

    setTitle('');
  }

  return (
    <div className="container mx-auto shadow-lg flex flex-col items-center justify-center my-6 py-6 px-6 bg-rose-200 w-[500px] rounded-xl text-white">
      <label className='font-medium text-xl mb-2'>Create new ToDo</label>
      <form 
      onSubmit={(e) => {onSubmitHandler(e)}}
      >
        <input
          type="text"
          placeholder="Enter ToDo..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-rose-400 transition-all shadow-xl hover:bg-rose-500 active:bg-rose-600 duration-200 text-white font-medium py-2 px-4 mt-4 ml-[50%] translate-x-[-50%] rounded focus:outline-none focus:shadow-outline">
          Add ToDo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm