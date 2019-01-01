import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, Image, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import global from '../../global';
const dataa = require('../../../data/dataCaloFood.json');
const { width, height } = Dimensions.get('window');
const imageRequire={
    gaonep: require(`../../../image/imagefood/gaonep.jpg`),
    banhmi:require(`../../../image/imagefood/banhmi.jpg`),
    raumuong:require(`../../../image/imagefood/raumuong.jpg`),
    thitbachi:require(`../../../image/imagefood/thitbachi.jpg`),
    bun:require(`../../../image/imagefood/bun.jpg`),
    mysoi:require(`../../../image/imagefood/mysoi.jpg`),
    khoaitay:require(`../../../image/imagefood/khoaitay.jpg`),
    bidao:require(`../../../image/imagefood/bidao.jpg`),
    cachua:require(`../../../image/imagefood/cachua.jpg`),
    caibap:require(`../../../image/imagefood/caibap.jpg`),
    chuoixanh:require(`../../../image/imagefood/chuoixanh.jpg`),
    thitbonac:require(`../../../image/imagefood/thitbonac.jpg`),
    thitcho:require(`../../../image/imagefood/thitcho.jpg`),
    thitgata:require(`../../../image/imagefood/thitgata.jpg`),
    thitlonmo:require(`../../../image/imagefood/thitlonmo.jpg`),
    cachep:require(`../../../image/imagefood/cachep.jpg`),
    carodong:require(`../../../image/imagefood/carodong.jpg`),
    trungga:require(`../../../image/imagefood/trungga.jpg`),
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase());
}
class ListFoodView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null
        }

    }
    gotothisFoodDetail(item,namee){
        global.gotoFoodDetail(item,namee)
    }
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        const namee = this.props.namee;
        const { styleContainer, textStyle, txtbackStyle, iconStyle, textInputStyle } = styles;
        return (
            <View >

                <View style={{
                    backgroundColor: '#EEEEE0',
                    height: height / 13,
                    borderBottomColor: '#888888',
                    borderBottomWidth: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>THỰC PHẨM THƯỜNG CÓ TRONG {toTitleCase(namee)}</Text>
                </View>
                <ScrollView style={{height:12*height/15}}>
                    <FlatList
                        data={dataa.listfood}
                        renderItem={({ item }) =>
                        
                            <TouchableOpacity style={{
                                backgroundColor: '#F8F8FF',
                                height: height / 15,
                                borderBottomColor: '#888888',
                                borderBottomWidth: 1,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}
                            onPress={()=>{this.gotothisFoodDetail(item,namee)}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={imageRequire[item.image]} style={{ height: height / 17, width: 30, marginLeft: 5 }} />
                                    <Text style={{
                                        marginLeft: 10, color: '#000011',
                                        fontFamily: 'Lato-Regular',
                                        fontSize: 15,
                                    }}>{item.name}</Text>
                                </View>
                                <View style={{ marginRight: 15 }}>
                                    <AntDesign name="star" size={10} color="#00FF00" />
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item) => item.id} />
                </ScrollView>
            </View>

        );
    }
}
export default connect()(ListFoodView)
const styles = StyleSheet.create({
    styleContainer: {
        height: height / 12,
        flexDirection: 'row',
        backgroundColor: "#F8F8FF",
        alignItems: 'center',
        //  justifyContent: 'space-between',
        borderBottomColor: '#888888',
        borderBottomWidth: 1,
        padding: 5,
    },
    textInputStyle: {
        backgroundColor: '#CFCFCF',
        height: height / 12,
        borderBottomColor: '#888888',
        borderBottomWidth: 0.5,
    },
    textStyle: {
        color: '#000011',
        fontFamily: 'Lato-Bold',
        fontSize: 15,
    },
    txtbackStyle: {
        color: '#0066FF',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        marginLeft: 5,
    },
    iconStyle: {
        marginLeft: 5,
        flexDirection: 'row',
        width: 2 * width / 5
    },

})