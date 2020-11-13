import React, { useState, useRef } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Text, PixelRatio} from 'react-native';
import Popover from 'react-native-popover-view/dist/Popover';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const scale = height / 680;

function normalize(size) {
    const newSize = size * scale 
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}



const ModelCard = ({name, doc, index, clickFunction}) => {
    const [showpopover, setpopover] = useState(false)
    const thisTouchable = useRef()

    return (
        <>
            <TouchableOpacity ref = {thisTouchable}
                key = {index}
                style = {styles.model}
                onLongPress = {() => setpopover(true)}
                onPress = {() => clickFunction(name)}>
                <Text style = {styles.text}>
                    {name}
                </Text>
            </TouchableOpacity>
            <Popover 
                from={thisTouchable}
                isVisible={showpopover}
                onRequestClose={() => setpopover(false)}>
                <Text style={styles.smalltext}>{doc}</Text>
            </Popover>
        </>
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
        fontSize: normalize(16),
    },
    smalltext: {
         color: '#4f603c',
         fontSize: normalize(11),
         marginTop: 1,
         textAlign: 'center',
    },
})