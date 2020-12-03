import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown-v2';
import axios from 'axios'
import config from '../config'
import { Paragraph } from 'react-native-paper';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {names: [], title: "-Indra ABM Models-", dropdown: [], curID: -1, curDoc: "Choose a model to show description."}
        this.api_server = config.API_URL;
        this.alertModelName = this.alertModelName.bind(this);
        this.onDropdownChange = this.onDropdownChange.bind(this);
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

    onDropdownChange(text, index, dat){
        var selDoc = this.state.names[index].doc;
        this.setState({curID: index, curDoc: selDoc});
    }

    alertModelName = () => {
        alert(this.state.curID);
    }

    render() {
        return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}} style = {styles.scroll}>
            <Text style={styles.titleText}>{this.state.title}</Text>
            <Dropdown
                label='Choose a model'
                data={this.state.dropdown}
                itemCount= {1}
                dropdownOffset={styles.dropdownOffset}
                dropdownPosition= {1}
                containerStyle={styles.containerStyle}
                onChangeText = {this.onDropdownChange}
            />
            <Paragraph style={styles.doctext}>
                {this.state.curDoc}
            </Paragraph>
            <TouchableOpacity
                style = {styles.model}
                onPress = {this.alertModelName}>
                <Text style = {styles.text}>
                    Use this model
                </Text>
            </TouchableOpacity>
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
        marginTop: height *0.05,
        marginBottom: height * 0.02,
    },
    doctext: {
        padding: 10,
        paddingHorizontal: width * 0.07,
        height: height*0.1,
    },
    dropdownOffset: {
        top: height * 0.14, 
        left: - width * 0.01
    },
    containerStyle: {
        width: width * 0.8,
        marginHorizontal: width * 0.07
    },
    model: {
        padding: 10,
        marginHorizontal: width * 0.1,
        width: width * 0.8,
        height: height * 0.06,
        marginTop: 9,
        backgroundColor: '#f6fafe',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    }
 })
