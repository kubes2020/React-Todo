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

  // iterate through state to see if the onclick id matches the id in state, if it does...change 'completed' to true and put a line-through via css
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

  //if 'completed' is the opposite of true; keep it in state
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
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
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />

        <TodoList allTodos={this.state.todos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}


export default App;
