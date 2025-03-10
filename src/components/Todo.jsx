import React, { useState } from "react";
import "../styles/todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input === "") return alert("Text is required");

    setTodos((todos) => [...todos, { id: todos.length + 1, text: input }]);

    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        placeholder="Type New Toso"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ id, text }) => (
          <li key={id} className="todo">
            <span className="">{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
