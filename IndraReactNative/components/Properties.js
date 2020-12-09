import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import axios from 'axios'
import config from '../config'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {names: [], dataNames: []};
        this.api_server = config.API_URL + 'models/props/';
    }
    
    componentDidMount(){
        //------ TODO: Change API call to model props from a model ID ------//
        //API call using Axios
        /*try{
            axios.get(`${this.api_server}models`)
            .then((res) => {
                var r = res.data;
                var activeNames = [];
                r.forEach((item, index) => {
                    if(item.active){
                        activeNames.push(item);
                    }
                });
                this.setState({names : activeNames});
            });
        } catch(e) {
            console.log(e);
        }*/
    }

    alertItemName = (item) => {
       alert(item.name);
    }
    render() {
        return (
        <View>
        </View>
        )
    }
 }
 export default List
 
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