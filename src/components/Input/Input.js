import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.sytles';

function Input({placeholder, value, password, onType}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={password}
        onChangeText={onType}
      />
    </View>
  );
}

export default Input;
