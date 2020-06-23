import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.title}
            isChecked={todo.completed}
            handleChangeProps={this.props.handleChangeProps}
            delTodo={this.props.delTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
