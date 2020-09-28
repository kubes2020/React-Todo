import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input name="title" id="title" type="text"></input>
          <button>Add ToDo</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
