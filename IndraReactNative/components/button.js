import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function ButtonUseModel(props){
    const { buttonStyle, onPress, testID, textStyle } = props

    return(
        <TouchableOpacity
            style = {buttonStyle}
            onPress = {onPress}
            testID = {testID}>
            <Text style = {textStyle}>
                Use this model
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonUseModel