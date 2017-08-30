import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <div className="header">
      <h1>Working with React</h1>
      <p>{this.props.value.greeting} {this.props.value.name}</p>
     </div>
    );
  }
}

export default Header;
