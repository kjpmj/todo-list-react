import React, { Component } from 'react';

class Footer extends Component {
  
  handleFilterClick = (e) => {
    const { onFilterClick } = this.props;
    e.preventDefault();
    onFilterClick(e.target.id);
  }

  render() {
    return (
      <div>
        <a href='#' onClick={this.handleFilterClick} id="ALL">ALL</a> | &nbsp;
        <a href='#' onClick={this.handleFilterClick} id="COMPLETED">COMPLETED</a> | &nbsp;
        <a href='#' onClick={this.handleFilterClick} id="ACTIVE">ACTVIE</a> 
      </div>
    );
  }
}

export default Footer;