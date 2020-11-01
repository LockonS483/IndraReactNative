import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const ModelCard = ({model, index}) => {
    return (
        <TouchableOpacity
            key = {index}
            style = {styles.model}
            onPress = {() => this.alertItemName(item)}>
            <Text style = {styles.text}>
                {model.name}
            </Text>
            <Text style = {styles.smalltext}>
                {model.doc}
            </Text>
        </TouchableOpacity>
    )
}

export default ModelCard

const styles = StyleSheet.create ({
    model: {
        padding: 10,
        width: width * 0.9,
        height: height * 0.06,
        marginTop: 6,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },
    text: {
        color: '#4f603c',
        fontSize: 16,
    },
    smalltext: {
         color: '#7c8a6d',
         fontSize: 11,
         marginTop: 1,
         textAlign: 'center',
    },
})