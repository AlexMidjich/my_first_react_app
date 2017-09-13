import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

//State that handels the which value the counter has.
 state = {
  counter: 0
 }

//Function that adds one to counter
 plusClick = () => {
  this.setState({ counter: this.state.counter + 1});
 }
//Function that Subtracts one to counter
 minusClick = () => {
  this.setState({ counter: this.state.counter -1});
 }

  render() {

   const styling = {
    color : 'crimson'
   }

    return (
      <div id="sidebar">
      <div className="inputfield" style={ styling }>
       <h4 >Get your personel greeting</h4>
       {/* The value from the input field is sent to state.name in app.js. From there the value in state is inserted in Header.js */}
       <input type="text" name="namn" placeholder="type in your name" value={ this.props.name } onChange={ this.props.handleChange } />
      </div>
       <p>This is a sidebar with som list items</p>
       <ul>
        <li>One</li>
        <li>Two</li>
        <li>three</li>
       </ul>
       <h4>Counter</h4>
       <PlusButton plusClick={this.plusClick}  />
       <MinusButton minusClick={this.minusClick} />
       <p>Value: {this.state.counter}</p>
      </div>
    );
  }
}
function PlusButton(props) {
  return (
     <button onClick={ props.plusClick }>Adds 1</button>
  );
}
const MinusButton = props => 
  <button onClick={ props.minusClick }>Subtracts 1</button>

export default Sidebar;
