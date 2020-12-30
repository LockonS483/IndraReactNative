import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import config from '../config'


class ModelView extends Component {
    constructor(props) {
        super(props);
        const { route, navigation } = this.props
        this.state = {modelParams: route.params.modelParams, modelID: route.params.modelID, ready: false}
        this.props_url = config.PROPS_URL;
    }

    async componentDidMount(){
        console.log(`${this.props_url}${this.state.modelID}`)
        let params = axios
        .put(
            `${this.props_url}${this.state.modelID}`, 
            this.state.modelParams, 
            {headers: {"Content-Type": "json/raw"}}
        )
        .then(function(response){
            console.log(response.header, response.data)
        })
        
        this.setState({ready: true});
        this.setState({modelNewParams: params.data})
    }

    render(){
        var displayModelParams = "";
        var temp = <Text>loading...</Text>
        if(this.state.ready){
            displayModelParams = JSON.stringify(this.setState.modelNewParams);
            temp = <Text>{displayModelParams}</Text>
        }
        return(
            <View>
                <Text>{temp}</Text>
            </View>
        )
    }

}

export default ModelView