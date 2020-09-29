// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

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

// const TodoList = (props) => {
//     return (
//       <>
//         <div onClick={() => props.toggleItem(props.tod.id)}>
//           <p>{props.tod.title}</p>
//         </div>
//       </>
//     );
//   };
