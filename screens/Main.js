import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
// import TextInputComponent from '../components/TextInputComponent';
import ModalComponent from '../components/ModalComponent';
import {PRIMARY, WHITE, LIGHTER, LIGHT, DARK, BLACK} from '../lib/constants';

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
        <ModalComponent
          modalVisible={modalVisible}
          onClose={this.showModal}
          message={message}></ModalComponent>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.title}>Billboard</Text>
          </View>
          <View>
            <View style={styles.messageContainer}>
              <View>
              <TextInput
                placeholder="Write your message"
                value={message}
                onChangeText={(e) => this.updateMessage(e)}></TextInput>
                </View>
              <View>
                <Button title="Erase" onPress={this.eraseMessage}></Button>
              </View>
            </View>
            <View>
              <Button title="Press here" onPress={this.makeBillboard}></Button>
            </View>
          </View>
        </View>
      </>
    );
  }

  eraseMessage = () => {
    this.setState({
      message: null,
    });
  };

  makeBillboard = () => {
    if (this.state.message != null && this.state.message != '') {
      this.showModal();
    } else {
      Alert.alert('Write something first');
    }
  };

  showModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  updateMessage(messageValue) {
    this.setState({
      message: messageValue,
    });
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: PRIMARY,
    height: '100%',
    width: '100%',
    padding: '5%',
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 60,
  },
  messageContainer: {
    backgroundColor: LIGHT,
    // height: 60,
    // width: '100%',
    // marginBottom: '10%',
  },
});

export default Main;
