import {StyleSheet, Dimensions} from 'react-native';

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    width: deviceSizes.width / 2,
    height: deviceSizes.height / 2,
    alignSelf: 'center',
    resizeMode: 'contain',
    tintColor: 'white',
  },
  body_container: {
    flex: 1,
  },
});
