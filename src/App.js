import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: "take out trash",
          id: "123",
          completed: false,
        },
      ],
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      title: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({ ...this.state, todos: [...this.state.todos, newItem] });
  };

  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          console.log("it changed");
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    // console.log(this.state.todos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />

        <TodoList allTodos={this.state.todos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;

// render() {
//   // console.log(this.state.todos);
//   return (
//     <div>
//       <h2>Welcome to your Todo App!</h2>
//       <TodoForm addItem={this.addItem} />
//       {/* <p>{this.state.todos[0].title}</p> */}
//       {this.state.todos.map((tod) => (
//         <TodoList key={tod.id} tod={tod} toggleItem={this.toggleItem} />
//       ))}
//     </div>
//   );
// }
