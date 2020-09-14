import React, { useState } from "react";

import "./styles.css";

function Todo({ todo, index, completeTodo, removeTodo, pushTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "underline" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Enter Item"
      />
    </form>
  );
}

// PushTodoList is to Push completed items to a new list rendered below List
// function PushTodoList({ pushTodo }) {
//   const [value, setValue] = useState("");

//   return <list>pushTodo</list>;
// }

function UserList() {
  const [todos, setTodos] = useState([
    {
      text: "Enter Item. Press COMPLETE, and X to remove",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const ListCompleted = [];

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // const pushTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.push(index, 1);
  //   console.log(index, 1);
  //   setTodos(newTodos);
  // };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default UserList;
