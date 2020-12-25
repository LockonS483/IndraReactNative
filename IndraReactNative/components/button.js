import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function ButtonUseModel(props){
    const { buttonStyle, testID, textStyle, navigationPath, navigation} = props
    return(
        <TouchableOpacity
            style = {buttonStyle}
            onPress={() => navigation.navigate(navigationPath[0], {
                modelID: navigationPath[1].modelID
            })}
            testID = {testID}>
            <Text style = {textStyle}>
                Use this model
            </Text>
        </TouchableOpacity>
    )
}

function ButtonSubmitOptions(props){
    const { buttonStyle, testID, textStyle, navigationPath, navigation} = props
    return(
        <TouchableOpacity
            style = {buttonStyle}
            testID = {testID}
            onPress = {() => navigation.navigate(navigationPath[0], { modelParams: navigationPath[1], modelID: navigationPath[2]})}>
            <Text style = {textStyle}>
                Submit
            </Text>
        </TouchableOpacity>
    )
}

export {
    ButtonUseModel, 
    ButtonSubmitOptions, 
}

//onpress = {() => navigation.navigate(navigationPath[0], navigationPath[1])}>