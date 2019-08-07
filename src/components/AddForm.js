import React, { Component } from 'react';

class AddForm extends Component {
  state = {
    text : ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onAddSubmit } = this.props;
    onAddSubmit(this.state.text);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name='text' value={this.state.text}/>
          <button type='submit'>추가</button>
        </form>
      </div>
    );
  }
}

export default AddForm;