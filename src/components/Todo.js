import React from "react";

const Todo = (props) => {
  return (
    <>
      <div onClick={() => props.toggleItem(props.tod.id)}>
        <p>{props.tod.title}</p>
      </div>
    </>
  );
};

export default Todo;
