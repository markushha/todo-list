import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

function ToDo({ title, id, removeTodo, editTodo }) {
  const [edit, setEdit] = useState(false);
  const [deletecolor, setDeleteColor]= useState('white');
  const [editcolor, setEditColor]= useState('white');
  const [newTitle, setNewTitle] = useState({
    newValue: title,
    id: id
  });

  return (
    <div
      key={id}
      className="w-[400px] h-fit bg-rose-400 rounded-xl shadow-xl text-white font-semibold my-4 py-4 px-4 flex flex-row items-center justify-between "
    >
      <div className="text-white font-semibold">
        {edit && (
          <input
            type="text"
            value={newTitle.title}
            onChange={(e) => setNewTitle(e.target.value)}
            className="bg-rose-200 focus:outline-none w-fit rounded-lg py-1 px-2"
            onSubmit={(e) => {
              editTodo(newTitle.id, e.target.value);
              setEdit(false);
            }}
          />
        )}
        {!edit && <h2 className="py-1 px-2 max-w-[200px] break-all">{title}</h2>}
      </div>
      <div>
        <button className="mr-2" onClick={() => removeTodo(id)}>
          <MdDelete
            onMouseEnter={() => setDeleteColor("pink")}
            onMouseLeave={() => setDeleteColor("white")}
            color={deletecolor}
            size={20}
          />
        </button>
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          <AiFillEdit
            onMouseEnter={() => setEditColor("pink")}
            onMouseLeave={() => setEditColor("white")}
            color={editcolor}
            size={20}
          />
        </button>
      </div>
    </div>
  );
}

export default ToDo