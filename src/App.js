import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/Footer';

class App extends Component {

//State is a object that is used in the header component.
 state = {
  name: '',
 }
//handleChange is a function that gives the parameter in state a value.
 handleChange = (e) => {
  this.setState({ name: e.target.value });
 }
 plusClick = () => {
  this.setState({ counter: this.state.counter +1});
 }
 minusClick = () => {
  this.setState({ counter: this.state.counter -1});
 }

  render() {
   return (
      <div>
       <Header value={object} isVisible={true} name={ this.state.name } />
       <div className="content">
        <Content title="My first React app" />
        <Sidebar handleChange={ this.handleChange } value={ this.state.name } />
       </div>
       <Footer />
      </div>
    );
  }
}

const object = {
 greeting : 'Hello',
 hej : 'good to see you!'
};





export default App;
