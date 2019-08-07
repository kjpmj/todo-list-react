import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';
import Footer from './components/Footer';

class App extends Component {
  id = 0;
  state = {
    todos : [],
    filter : 'ALL'
  }

  handleTodoClick = (changeTodo) => {
    const { todos } = this.state;
    this.setState({
      todos : todos.map(todo =>
        changeTodo.id === todo.id 
          ? {...todo, ...changeTodo}
          : todo
      )
    });
  }

  handleAddSubmit = (text) => {
    const { todos } = this.state;
    this.setState({
      todos : todos.concat({id : this.id++ , text: text, completed : false})
    });
  }
  
  handleFilterClick = (filter) => {
    this.setState({
      filter : filter
    });
  }

  render() {
    const { todos, filter } = this.state;

    let filteredTodos;

    switch(filter){
    case 'ALL':
      filteredTodos = todos.concat();
      break;
    case 'COMPLETED':
      filteredTodos = todos.filter( todo =>
        todo.completed
      );
      break;
    case 'ACTIVE':
      filteredTodos = todos.filter( todo =>
        !todo.completed
      );
      break;
    }

    return (
      <div>
        <AddForm
          onAddSubmit={this.handleAddSubmit}
        />
        <TodoList
          todos={filteredTodos}
          onTodoClick={this.handleTodoClick}
        />
        <Footer
          onFilterClick={this.handleFilterClick}
        />
      </div>
    );
  }
}

export default App;
