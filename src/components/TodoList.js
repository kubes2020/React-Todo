// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

//map through todos and pass as props to render in Todo
//also passing toggleItem fn
const TodoList = (props) => {
  return (
    <>
      <div>
        {props.allTodos.map((tod) => (
          <Todo key={tod.id} tod={tod} toggleItem={props.toggleItem} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
