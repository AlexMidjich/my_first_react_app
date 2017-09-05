import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class App extends Component {
  render() {
   return (
      <div>
       <Header value={object} isVisible={true} />
       <div className="content">
        <Content title="My first React app" />
        <Sidebar />
       </div>
       <Footer />
      </div>
    );
  }
}

const object = {
 greeting : 'Hello',
 name : 'Alexander'
};


export default App;
