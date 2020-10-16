import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {names: [], dataNames: []};
    }
    
    componentDidMount(){
        fetch('http://indrasnet.pythonanywhere.com/models', {
          method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            dataNames: responseJson
          })
          var activeNames = [];
          this.state.dataNames.forEach((item, index) => {
              if(item.active){
                  activeNames.push(item);
              }
          });
          this.setState({names : activeNames});
        })
        
    }

    alertItemName = (item) => {
       alert(item.name);
    }
    render() {
        return (
        <View>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}} style = {styles.scroll}>
                <Text style={styles.titleText}>-Indra Models-</Text>
                {
                    this.state.names.map((item, index) => (
                           <TouchableOpacity
                              key = {item.name}
                              style = {styles.model}
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
    model: {
        padding: 30,
        width: width * 0.9,
        marginTop: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
       color: '#4f603c'
    },
    scroll: {
        marginTop: height * 0.05,
        height: '100%',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
 })