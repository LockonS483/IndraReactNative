import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown-v2';
import axios from 'axios'
import config from '../config'
import ModelCard from './ModelCard'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {names: [], title: "-Indra Models-", dropdown: []};
        this.api_server = config.API_URL;
        this.alertModelName = this.alertModelName.bind(this);
    }
    
    componentDidMount(){
        try{
            axios.get(`${this.api_server}models`)
            .then((res) => {
                var r = res.data;
                console.log(res.data)
                var activeNames = [];
                r.forEach((item, index) => {
                    if(item.active){
                        activeNames.push(item);
                    }
                });
                this.setState({names : activeNames});

                //arr for dorpdown
                var arr = [];
                r.forEach((item, index) => {
                    if(item.active){
                        arr.push({value: item.name});
                    }
                });
                this.setState({dropdown: arr})
            });
        } catch(e) {
            console.log(e);
        }
    }

    alertModelName = (name) => {
        alert(name);
    }

    render() {
        return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}} style = {styles.scroll}>
            <Text style={styles.titleText}>{this.state.title}</Text>
            <Dropdown
                label='Choose a model'
                data={this.state.dropdown}
                itemCount= '8'
                dropdownOffset={styles.dropdownOffset}
                containerStyle={styles.containerStyle}
            />
            {/*
            {
                this.state.names.map((item, index) => (
                    <ModelCard 
                        name={item.name}
                        doc={item.doc}
                        index={index}
                        clickFunction={this.alertModelName}
                    />
                ))
            }
            */}
            </ScrollView>
        </View>
        )
    }
 }
 export default Menu
 
 const styles = StyleSheet.create ({
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
    dropdownOffset: {
        top: height * 0.15, 
        left: - width * 0.01
    },
    containerStyle: {
        width: width * 0.8
    }   
 })
