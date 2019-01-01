import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import global from '../global';
import {connect} from 'react-redux'
class BuaToi extends Component {
    goBack() {
        this.props.navigation.goBack();
    }
    gotothisListFood(){
        const thamso='Bữa tối'
        global.gotoListFood(thamso)
    }
    render() {
        const { StyleButton, StyleContener, StyleHeader, txtStyle,styleCenter } = styles;
        return (
            <View style={StyleContener}>
                <View style={StyleHeader}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,alignItems:'center'}}>
                        <View></View>
                        <Text style={{
                            color: '#000000',
                            fontSize: 10,
                            fontFamily: 'Lato-Regular',
                        }}>Tổng Cộng</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{
                            color: '#000000',
                            fontSize: 25,
                            fontFamily: 'Lato-Bold',
                        }}
                        >Bữa tối</Text>
                        <Text
                            style={{
                                color: '#000000',
                                fontSize: 20,
                                fontFamily: 'Lato-Regular',
                            }}
                        >{this.props.myCaloToi}</Text>
                    </View>
                </View>
                <View style={styleCenter}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontFamily:'Lato-bold',fontSize:20}}>Hãy bắt đầu!</Text>
                        <Text>Bấm vào '+' để thêm một mục</Text>
                        <Text>nhập vào tạp chí của bạn.</Text>
                    </View>
                </View>
                <TouchableOpacity style={StyleButton}
                 onPress={()=>{this.gotothisListFood()}}>
                <Icon name="ios-add-circle-outline" size={40} color="#0066FF" /> 
                </TouchableOpacity>
            </View>
        )
    }
}
function mapStateToProps(state){
    return{ myCaloToi: state.calotoi}
}
export default connect(mapStateToProps)(BuaToi)
var styles = StyleSheet.create({
    StyleContener: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    StyleHeader: {
        backgroundColor: '#F8F8FF',
        padding: 8,
        borderBottomWidth: 0.4,
        borderBottomColor: '#828282',
        flex:3,
        justifyContent:'center'
    },
    styleCenter:{
        backgroundColor:'#FFFFFF',
        flex:18,
        justifyContent:'center',
        alignItems:'center'
    },
    StyleButton: {
        backgroundColor: '#F8F8FF',
        alignItems: 'center',
        justifyContent: 'center',
        flex:2,
        borderTopWidth:0.3,
        borderTopColor:'#828282'
    },
    txtStyle: {
        color: '#0066FF',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        marginRight: 5,
    },

})