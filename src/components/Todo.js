import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <>
      <div
        onClick={() => props.toggleItem(props.tod.id)}
        className={`item${props.tod.completed ? ` completed` : ""}`}
      >
        <p>{props.tod.title}</p>
      </div>
    </>
  );
};

export default Todo;
