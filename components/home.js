import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import FlatButton from '../shared/button';
import SignUp from './signUp';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const hideModal = () => {
    setModalOpen(false);
  };
  return (
    <View style={styles.main}>
      <View>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <View style={styles.titleView}>
                <Text style={styles.title}>SIGN UP</Text>
              </View>
              <SignUp hideModal={hideModal} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <FlatButton text="Sign Up" onPress={showModal} />
        {/* <FlatButton text="Signup Form using Formik" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
  },
  titleView: {
    marginTop: '20%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
  },
});
