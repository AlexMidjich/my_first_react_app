import React, { Component } from 'react';

class Header extends Component {
  render() {
   if(this.props.isVisible){
    return (
     <div className='header'>
      <h1>Working with React</h1>
       <p>{this.props.value.greeting} {this.props.name} {this.props.value.hej}</p>
     </div>
    );
   }else{
    return null;
   }
  }
}

export default Header;
