// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div onClick={() => props.toggleItem(props.tod.id)}>
        <p>{props.tod.title}</p>
      </div>
    </>
  );
};

export default TodoList;
