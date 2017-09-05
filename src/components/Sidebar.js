import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
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
