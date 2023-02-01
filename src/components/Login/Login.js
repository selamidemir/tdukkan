import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import Button from '../Button';
import Input from '../Input';

import styles from './Login.sytles';

function Login() {
  const handleLogin = (values) => {
    console.log(values);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          source={require('../../assets/logo-basket.png')}
          style={styles.logo}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kulanıcı adınızı giriniz.."
              value={values.username}
              onType={handleChange('username')}
            />
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              password={true}
              onType={handleChange('password')}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;
