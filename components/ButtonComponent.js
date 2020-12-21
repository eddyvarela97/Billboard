import React, {Component} from 'react';
import {Button, Modal, StyleSheet, Text} from 'react-native';
import ModalComponent from './ModalComponent'

class ButtonComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
    };
  }

  render() {
    const { title } = this.state;
    return (
      <>
        {/* The button must always have a title */}
        <Button
          title={title ? title : 'Button'}
          onPress={()=>console.log('pressed')}
          ></Button>
          {/* <ModalComponent ></ModalComponent> */}
        {/* <Modal visible={modalVisible}>
          <Text>This is the Modal</Text>
          <Button title="Close" onPress={this.toggleModal}></Button>
        </Modal> */}
      </>
    );
  }

//   toggleModal = () => {
//     console.log('toggle modal');
//     // If your new state update depends on the previous state, always use the functional form of setState which accepts as argument a function that returns a new state.
//     this.setState((state) => ({
//       modalVisible: !state.modalVisible,
//     }));
//   };
}

const styles = StyleSheet.create({});

export default ButtonComponent;
