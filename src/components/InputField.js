import React, { Component } from 'react';

class InputField extends Component {

  render() {
    return (

      <div>
       <input type="text" name="namn" placeholder="type something" value={ this.props.text } onChange={ this.props.changeText } />
      </div>
    );
  }
}

export default InputField;
