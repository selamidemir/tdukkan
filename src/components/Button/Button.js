import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

function Button({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text title={text} style={styles.title}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
