import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
  render(){
    const { todos, onTodoClick } = this.props;
    const todo_list = todos.map( todo => 
      <Todo 
        key={todo.id} 
        todo={todo} 
        onTodoClick={onTodoClick}
       />
    );

    return (
      <div>
        {todo_list}
      </div>
    );
  }
}

export default TodoList;