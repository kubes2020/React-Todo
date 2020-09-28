import React from "react";
import TodoForm from "./components/TodoForm";

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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
