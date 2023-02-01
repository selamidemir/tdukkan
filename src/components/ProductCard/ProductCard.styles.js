import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  image: {
    width: 100,
    minHeight: 100,
    margin: 3,
    borderColor: 'black',
    borderWidth: 0,
    borderRadius: 7,
    resizeMode: 'contain',
    backgroundColor: 'lightgray',
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
        borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  price: {
    textAlign: 'right',
  },
});
