import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import global from '../global';
import imagemenu from '../../image/imageApp/imagemenu.jpg'
const { width, height } = Dimensions.get('window');
export default class Header extends Component {
    render() {
        const { styleList, stylesUser, textStyle, imageiconStyle, choiceStyle } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#888888', height: height }} >
                <ImageBackground style={stylesUser} source={imagemenu}>
                    <TouchableOpacity
                        onPress={() => { global.closeDrawer() }}
                        style={{ marginLeft: 7 * width / 10 }}
                    >
                        <Icons name="ios-menu" size={35} color="#0066FF" />
                    </TouchableOpacity>
                </ImageBackground>
                <ScrollView style={styleList}>
                    <TouchableOpacity style={choiceStyle}
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Icons name="md-today" size={30} color="#0066FF" />
                            <Text style={{marginLeft:5}}>Hôm nay</Text>
                        </View>
                        <Icon name="navigate-next" size={20} color="#8B8B83" />
                    </TouchableOpacity>
                    <TouchableOpacity style={choiceStyle}
                        onPress={() => { this.props.navigation.navigate('Baitap') }}
                    >
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <MaterialCommunityIcons name="run-fast" size={30} color="#0066FF" />
                            <Text style={{marginLeft:5}}>Bài tập</Text>
                        </View>
                        <Icon name="navigate-next" size={20} color="#8B8B83" />
                    </TouchableOpacity>
                    <TouchableOpacity style={choiceStyle}
                        onPress={() => { this.props.navigation.navigate('Congthucnauan') }}
                    >
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Icons name="md-cart" size={30} color="#F4A460" />
                            <Text style={{marginLeft:5}}>Công thức nấu ăn</Text>
                        </View>
                        <Icon name="navigate-next" size={20} color="#8B8B83" />
                    </TouchableOpacity>
                    <TouchableOpacity style={choiceStyle}
                        onPress={() => { this.props.navigation.navigate('TinhCalo') }}
                    >
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <MaterialCommunityIcons name="calculator-variant" size={30} color="#0000FF" />
                            <Text style={{marginLeft:5}}>Tính lượng Calo</Text>
                        </View>
                        <View></View>
                        <Icon name="navigate-next" size={20} color="#8B8B83" />
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    stylesUser: {
        flexDirection: 'row',
        height: 150,
        backgroundColor: '#3333CC',
        justifyContent: 'space-between',
        borderRightWidth: 1.5,
        borderRightColor: '#696969',
    },
    styleList: {
        backgroundColor: '#F8F8FF'
    },
    textStyle: {
        color: '#000011',
        fontFamily: 'Lato-Bold',
        fontSize: 15,
    },
    imageiconStyle: {
        width: 30,
        height: 30,
        borderRadius: 0.5,
    },
    choiceStyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#888888',
        justifyContent: 'space-between',
        borderRightWidth: 1.5,
        borderRightColor: '#696969',
        padding: 5
    }
})
