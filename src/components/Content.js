import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div id="maincontent">
       <h2>{this.props.title}</h2>
       <p>This is my first attempt on buildning an app with react.</p>
       <p>I have built this app using different components.</p>
      </div>
    );
  }
}

export default Content;
