import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        marginTop: 11,
        backgroundColor: 'white',
    },
    image: {
        // flex: 11,
        width: deviceSize.width,
        height: deviceSize.height / 2,
        resizeMode: 'contain',
        borderWidth: 0,
        borderColor: 'gray',
    },
    title: {
        // flex: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 21,
        margin: 5,
    },
    description: {
        // flex: 5,
        margin: 5,
        fontStyle: 'italic',
    },
    price: {
        // flex: 5,
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 21,
        textAlign: 'right',
        padding: 5,
        borderWidth: 1,
    },
});