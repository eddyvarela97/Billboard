import React, {Component} from 'react';
import { Button, TextInput, Alert } from 'react-native';
// import TextInputComponent from '../components/TextInputComponent';
import ModalComponent from '../components/ModalComponent';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      message: null,
    };
  }

  render() {
    const {modalVisible, message} = this.state;
    return (
      <>
        <TextInput
          placeholder="Write your message"
          value={message}
          onChangeText={(e) => this.updateMessage(e)}></TextInput>
        <Button title="Press here" onPress={this.makeBillboard}></Button>
        <ModalComponent
          modalVisible={modalVisible}
          onClose={this.showModal}
          message={message}></ModalComponent>
      </>
    );
  }

  makeBillboard = () => {
    if(this.state.message != null && this.state.message != ''){
    this.showModal();
    }else{
      Alert.alert('Write something first')
    }
  }

  showModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };



  updateMessage(messageValue) {
    this.setState({
      message: messageValue
    });
  }
}

export default Main;
