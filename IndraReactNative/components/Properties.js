import React, { Component } from 'react'
import { View, Text, Form, StyleSheet, ScrollView, Dimensions } from 'react-native'
import axios from 'axios'
import config from '../config'
import ModelInputfield from './ModelInputfield.js'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Properties extends Component {
    constructor(props) {
        super(props);
        const {route, navigation} = this.props;
        this.state = { modelID : route.params.modelID, menuDetails : {}};
        this.props_url = config.PROPS_URL;
    }

    async componentDidMount(){
        const properties = await axios.get(`${this.props_url}${this.state.modelID}`)
        this.setState({modelDetails : properties.data});
        console.log(this.state.modelDetails);
    }

    render() {
        return (
            <View>
                <Text>ModelID: {this.state.modelID}</Text>
            {/*<Form>
                <View className="container">
                {Object.keys(this.state.modelDetails).map((item) => {
                    return (
                        <ModelInputfield
                        label={this.state.modelDetails[item].question}
                        type={this.state.modelDetails[item].atype}
                        placeholder={this.state.modelDetails[item].val}
                        error={this.state.modelDetails[item].errorMessage}
                        propChange={this.propChanged}
                        name={item}
                        key={item}
                        />
                        <Text>hi</Text>
                    );
                })}
                </View>
            </Form>*/}
            </View>
        );
    }
}


/*function Properties({route, navigation}) {
    const { modelID } = route.params
    
    return (
        <View>
            <Text>ModelID: {modelID}</Text>
        </View>
    );
    
 }*/
 export default Properties