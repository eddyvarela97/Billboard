import React, {Component} from 'react';
import {Button, Modal, StyleSheet, Text} from 'react-native';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modalVisible) {
      return null;
    }
    return (
      <>
        <Modal visible={this.props.modalVisible}>
          <Text style={styles.message}>{this.props.message}</Text>
          {/* The button must always have a title */}
          <Button title="Close" onPress={(e) => this.onClose(e)}></Button>
        </Modal>
      </>
    );
  }
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
}

const styles = StyleSheet.create({
  message: {
    fontSize: 90,
    color: 'black',
    // transform: [{ rotate: '30deg'}],
  }
});

export default ModalComponent;
