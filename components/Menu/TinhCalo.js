import React, { Component } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
export default class TinhCalo extends Component {
    goBack(){
        this.props.navigation.goBack();
    }
    render(){
        return(
            <TouchableOpacity
                onPress={()=>{this.goBack()}}
            >
            <Text>Tinh Calo</Text>
            </TouchableOpacity>
        )
    }
}