import React, { Component } from 'react';

class Todo extends Component {
  handleTodoClick = () => {
    const { todo, onTodoClick } = this.props;
    const changeTodo = {...todo, completed : !todo.completed}
    onTodoClick(changeTodo);
  }

  render() {
    const { todo } = this.props;
    const style = {
      textDecoration : todo.completed ? 'line-through' : 'none',
      cursor         : todo.completed ? 'auto' : 'pointer'
    }

    return (
      <div 
        style={style}
        onClick={this.handleTodoClick}
      >
        {todo.text}
      </div>
    );
  }
}

export default Todo;