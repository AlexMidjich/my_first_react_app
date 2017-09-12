import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

  render() {

   const styling = {
    color : 'crimson'
   }

    return (
      <div id="sidebar">
      <div className="inputfield" style={ styling }>
       <h4 >Get your personel greeting</h4>
       <input type="text" name="namn" placeholder="type in your name" value={ this.props.name } onChange={ this.props.handleChange } />
      </div>
       <p>This is a sidebar with som list items</p>
       <ul>
        <li>One</li>
        <li>Two</li>
        <li>three</li>
       </ul>
      </div>
    );
  }
}

export default Sidebar;
