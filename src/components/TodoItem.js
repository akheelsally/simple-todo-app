import React from "react";

const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
};

class TodoItem extends React.Component {
  render() {
    const { todo, isChecked, id, key } = this.props;
    return (
      <li key={key} className="todo-item">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={this.props.delTodo.bind(this, id)}>Delete</button>
        <span style={isChecked ? completedStyle : null}>{todo}</span>
      </li>
    );
  }
}

export default TodoItem;
