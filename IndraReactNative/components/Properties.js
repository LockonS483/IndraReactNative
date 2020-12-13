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
        this.props_url = config.PROPS_URL;
        this.state = { modelID : route.params.modelID, menuDetails : {}, loadingText : 'loading properties...', ready : false};
        this.props_url = config.PROPS_URL;
    }

    async componentDidMount(){
        let properties = await axios.get(`${this.props_url}${this.state.modelID}`);
        this.setState( { modelDetails : properties.data, ready : true });
        this.setState( { ready: true } );
        /*try{
            axios.get(`${this.props_url}${this.state.modelID}`)
            .then((res) => {
                console.log(res);
                this.setState({ready: true});
            });
        } catch(e) {
            console.log(e);
        }*/
    }

    render() {
        const ready = this.state.ready;
        let t = <Text>{this.state.loadingText}</Text>;
        if(ready){
            /*t = <Form>
                <View className="container">
                {Object.keys(this.state.modelDetails).map((item) => {
                    return (
                        <ModelInputfield
                        label={this.state.modelDetails[item].question}
                        type={this.state.modelDetails[item].atype}
                        placeholder={this.state.modelDetails[item].val}
                        //error={this.state.modelDetails[item].errorMessage}
                        //propChange={this.propChanged}
                        name={item}
                        key={item}
                        />
                    );

                    return(
                        <Text></Text>
                    );
                })}
                </View>
            </Form>*/

            let texto = JSON.stringify(this.state.modelDetails);
            t = <Text>
                {texto}
            </Text>
        }

        return (
            <View>
            <Text>ModelID: {this.state.modelID}</Text>
            {t}
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