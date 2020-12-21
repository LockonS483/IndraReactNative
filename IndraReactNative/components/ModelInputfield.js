import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Input } from 'react-native'

function ModelInputfield(props){
    const{ label, name, type, placeholder, propChange, error } = props;

    return(
        <View>
            <Text>
                {label}
                {' '}
                {' '}
            </Text>
        </View>
    );
}

ModelInputfield.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.number,
    propChange: PropTypes.func,
    error: PropTypes.string,
};

ModelInputfield.defaultProps = {
    label: '',
    name: '',
    type: '',
    placeholder: 0,
    propChange() {},
    error: '',
};

export default ModelInputfield