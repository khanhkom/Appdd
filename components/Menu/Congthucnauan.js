import React, { Component } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
export default class Congthucnauan extends Component {
    goBack(){
        this.props.navigation.goBack();
    }
    render(){
        return(
            <TouchableOpacity
                onPress={()=>{this.goBack()}}
            >
            <Text>Cong thuc nau an</Text>
            </TouchableOpacity>
        )
    }
}