import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FlatButton from '../shared/button';
import {Formik} from 'formik';
import DatePicker from 'react-native-datepicker';

export default function SignUp(props) {
  const {hideModal} = props;
  return (
    <View style={styles.form}>
      <Formik
        initialValues={{
          FirstName: '',
          LastName: '',
          Email: '',
          Password: '',
          Date: '',
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}>
        {formikprops => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={formikprops.handleChange('FirstName')}
              value={formikprops.values.FirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={formikprops.handleChange('LastName')}
              value={formikprops.values.LastName}
            />
            <DatePicker
              style={styles.input}
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2000"
              maxDate="01-01-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  //display: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={formikprops.handleChange('Date')}
              date={formikprops.values.Date}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={formikprops.handleChange('Email')}
              value={formikprops.values.Email}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={formikprops.handleChange('Password')}
              value={formikprops.values.Password}
              secureTextEntry={true}
            />
            <FlatButton text="Sign Up" onPress={formikprops.handleSubmit} />
            <FlatButton text="Cancel" onPress={hideModal} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 15,
    margin: 5,
    width: '100%',
  },
});
