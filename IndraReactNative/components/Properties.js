import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Properties extends Component {
    constructor(props) {
        super(props);
        
    }
    
    
    render() {
        return (
        <View>
            <Text>Properties</Text>
        </View>
        )
    }
 }
 export default Properties
