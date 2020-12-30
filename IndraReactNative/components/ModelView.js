import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import config from '../config'
import { ScrollView } from 'react-native-gesture-handler';


class ModelView extends Component {
    constructor(props) {
        super(props);
        const { route, navigation } = this.props
        this.state = {modelParams: route.params.modelParams, modelID: route.params.modelID, ready: false}
        this.props_url = config.PROPS_URL;
    }

    async componentDidMount(){
        console.log(this.state.modelParams)
        let params = axios
        .put(`${this.props_url}${this.state.modelID}`, this.state.modelParams)
        .then((response) => {
            //console.log("Response header:", response.header, "\n\n")
            //console.log("Response data:", response.data)
            var temp = JSON.stringify(response.data)
            this.setState({modelNewParams: temp})
        })
        .catch(error => console.error(error));
        
        this.setState({ready: true});
    }

    render(){
        var displayModelParams = "";
        var temp = <Text>loading...</Text>
        if(this.state.ready){
            displayModelParams = this.state.modelNewParams;
            temp = <Text>{displayModelParams}</Text>
        }
        return(
            <View>
                <ScrollView>
                    <Text>{temp}</Text>
                </ScrollView>
            </View>
        )
    }

}

export default ModelView