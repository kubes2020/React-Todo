import React from "react";
import "./Todo.css";

//onClick toggles the item to completed
//className creates line-through with css .item.completed
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
