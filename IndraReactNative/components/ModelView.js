import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import config from '../config'


class ModelView extends Component {
    constructor(props) {
        super(props);
        const { route, navigation } = this.props
        this.state = {modelParams: route.params.modelParams, modelID: route.params.modelParams, ready: false}
        this.props_url = config.PROPS_URL;
    }

    async componentDidMount(){
        let params = await axios.put(`${this.props_url}${this.state.modelID}`)
        this.setState({ready: true});
        this.setState({modelNewParams: params.data})
    }

    render(){
        var displayModelParams = "";
        var temp = <Text>loading...</Text>
        if(this.state.ready == true){
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