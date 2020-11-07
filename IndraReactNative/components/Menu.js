import React, { Component } from 'react'
import { View} from 'react-native'
import axios from 'axios'
import config from '../config'
import ModelOverviews from './ModelOverviews'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {names: [], dataNames: []};
        this.api_server = config.API_URL;
    }
    
    componentDidMount(){
        try{
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
        }
    }

    alertItemName = (item) => {
       alert(item.name);
    }

    render() {
        return (
        <View>
            <ModelOverviews models={this.state.names}/>
        </View>
        )
    }
 }
 export default Menu
 
