import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'

var width = Dimensions.get('window').width;

class List extends Component {
    state = {
       names: [
          {
             id: 0,
             name: 'Basic',
          },
          {
             id: 1,
             name: 'Bacteria',
          },
          {
             id: 2,
             name: 'El Farol Bar',
          },
          {
             id: 3,
             name: 'Adam Smith\'s Fashion Model',
          },
          {
            id: 4,
            name: 'Predator-Prey Dynamics',
          },
          {
            id: 5,
            name: 'Schelling\'s Segregation Model',
          },
          {
            id: 6,
            name: 'Menger\'s Origin of Money',
          },
          {
            id: 7,
            name: 'Epidemic Model',
          },
          {
            id: 8,
            name: 'An Abelian Sandpile',
          },
          {
            id: 9,
            name: 'Wolfram\'s Rules',
          },
       ]
    }
    alertItemName = (item) => {
       alert(item.name)
    }
    render() {
       return (
          <View>
              <ScrollView>
             {
                this.state.names.map((item, index) => (
                   <TouchableOpacity
                      key = {item.id}
                      style = {styles.container}
                      onPress = {() => this.alertItemName(item)}>
                      <Text style = {styles.text}>
                         {item.name}
                      </Text>
                   </TouchableOpacity>
                ))
             }
             </ScrollView>
          </View>
       )
    }
 }
 export default List
 
 const styles = StyleSheet.create ({
    container: {
        padding: 30,
        width: width* 0.9,
        marginTop: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
       color: '#4f603c'
    }
 })