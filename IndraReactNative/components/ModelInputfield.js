import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

function ModelInputfield(props){
    const{ label, name, type, placeholder, propChange, error } = props;

    return(
        <div key={label} className='form-group'>
            <div>
                <label htmlFor={name}
                className="detailLabel"
                key={label}
                >
                    {label}
                    {' '}
                    {' '}
                </label>
                <input 
                id={name}
                type={type}
                style={{fontSize:'13pt'}}
                placeholder={placeholder}
                onChange={propChange}
                name={name}/>
            </div>
            </br>
        </div>

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

export default ModelInputfield;