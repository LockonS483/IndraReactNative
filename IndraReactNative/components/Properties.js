import React from 'react'
import { Text, View, Dimensions } from 'react-native'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function Properties({route, navigation}) {
    const { modelID } = route.params
    console.log(modelID)
    return (
        <View>
            <Text>ModelID: {modelID}</Text>
        </View>
    )
    
 }
 export default Properties

 