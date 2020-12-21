import React, {Component} from 'react';
import {TextInput} from 'react-native';

class TextInputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: this.props.placeholder,
    };
  }

  render() {
    const { placeholder } = this.state;
    return (
      <>
        <TextInput placeholder={placeholder ? placeholder : null}></TextInput>
      </>
    );
  }
}

export default TextInputComponent;
