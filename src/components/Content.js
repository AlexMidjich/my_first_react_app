import React, { Component } from 'react';
import Paragraph from './Paragraph';
import InputField from './InputField';

class Content extends Component {
 state = {
  text: '',
  toggle: true
 };
 actionClick = () => {
  this.setState({ toggle: !this.state.toggle})
 }
 changeText = (e) => {
  this.setState({text: e.target.value});
 }
  render() {
   const renderText = this.state.toggle ? null : 'Hello! I only show up when you press the button.';
   const renderButtonText = this.state.toggle ? 'Click on me!' : 'Click on me again!'
    return (

      <div id="maincontent">
       <h2>{this.props.title}</h2>
       <p>This is my first attempt on buildning an app with react.</p>
       <p>I have built this app using different components, props and state.</p>
       <Paragraph />
       <button onClick={ this.actionClick }>
        <p>{ renderButtonText }</p>
       </button>
       { renderText }
       <InputField changeText={this.changeText} value={this.state.text} />
       <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default Content;
