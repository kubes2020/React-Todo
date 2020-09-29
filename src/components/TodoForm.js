import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(e, this.state.item);
    this.setState({ item: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            name="item"
            id="item"
            type="text"
            onChange={this.onChange}
            value={this.state.item}
          ></input>
          <button>Add ToDo</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
