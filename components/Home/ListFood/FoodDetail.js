import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, Image, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { themcalosang, themcalonhe, themcalotoi, themcalotrua } from '../../../redux/reducer/actionCreators'
const { width, height } = Dimensions.get('window');
const imageRequire = {
    gaonep: require(`../../../image/imagefood/gaonep.jpg`),
    banhmi: require(`../../../image/imagefood/banhmi.jpg`),
    raumuong: require(`../../../image/imagefood/raumuong.jpg`),
    thitbachi: require(`../../../image/imagefood/thitbachi.jpg`),
    bun: require(`../../../image/imagefood/bun.jpg`),
    mysoi: require(`../../../image/imagefood/mysoi.jpg`),
    khoaitay: require(`../../../image/imagefood/khoaitay.jpg`),
    bidao: require(`../../../image/imagefood/bidao.jpg`),
    cachua: require(`../../../image/imagefood/cachua.jpg`),
    caibap: require(`../../../image/imagefood/caibap.jpg`),
    chuoixanh: require(`../../../image/imagefood/chuoixanh.jpg`),
    thitbonac: require(`../../../image/imagefood/thitbonac.jpg`),
    thitcho: require(`../../../image/imagefood/thitcho.jpg`),
    thitgata: require(`../../../image/imagefood/thitgata.jpg`),
    thitlonmo: require(`../../../image/imagefood/thitlonmo.jpg`),
    cachep: require(`../../../image/imagefood/cachep.jpg`),
    carodong: require(`../../../image/imagefood/carodong.jpg`),
    trungga: require(`../../../image/imagefood/trungga.jpg`),
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
class ListFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null,
            Calo: 0,

        }

    }
    componentDidMount() {
    }
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        const namee = this.props.navigation.state.params.name;
        const infor = this.props.navigation.state.params.info;
        const { styleContainer, textStyle, txtbackStyle, iconStyle, imageStyle, choiceStyle } = styles;
        return (
            <View >
                <View style={styleContainer}>
                    <View style={iconStyle}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { this.goBack() }}
                        >
                            <Icon name="ios-arrow-back" size={30} color="#0066FF" />
                            <Text style={txtbackStyle}>{namee}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={textStyle}>Mục mới</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            if (namee === 'Bữa sáng') {
                                return this.props.themcalosang(this.state.Calo)
                            }
                            if (namee === 'Bữa trưa') {
                                return this.props.themcalotrua(this.state.Calo)
                            }
                            if (namee === 'Bữa tối') {
                                return this.props.themcalotoi(this.state.Calo)
                            }
                            if (namee === 'Bữa ăn nhẹ') {
                                return this.props.themcalonhe(this.state.Calo)
                            }
                        }}

                    >
                        <AntDesign name="check" size={30} color="#0066FF" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ height: 11 * height / 12 }}>
                    <Image
                        source={imageRequire[infor.image]}
                        style={imageStyle}
                    />
                    <View style={{
                        backgroundColor: '#EEEEE0',
                        height: height / 13,
                        borderBottomColor: '#888888',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <Text>TÊN</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        height: height / 13,
                        borderBottomColor: '#888888',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <View style={{ height: height / 16, borderWidth: 1, borderColor: '#CFCFCF', justifyContent: 'center', paddingHorizontal: 5, borderRadius: 5 }}>
                            <Text style={{ fontFamily: 'Lato_Bold', fontSize: 16, color: '#000000' }}>{infor.name}</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#EEEEE0',
                        height: height / 13,
                        borderBottomColor: '#888888',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <Text>PHỤC VỤ</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        height: height / 6,
                        borderBottomColor: '#888888',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <View style={{ height: height / 15, flexDirection: 'row' }}>
                            <View style={{ height: height / 16, width: 7 * width / 10, borderWidth: 1, borderColor: '#CFCFCF', justifyContent: 'center', paddingHorizontal: 5, borderRadius: 5 }}>
                                <Text> 1 chén</Text>
                            </View>
                            <View style={{ height: height / 16, marginLeft: 5, borderWidth: 1, width: 2 * width / 10, borderColor: '#CFCFCF', justifyContent: 'center', paddingHorizontal: 5, borderRadius: 5 }}>
                                <Text> 186</Text>
                            </View>
                            <View style={{ height: height / 16, marginLeft: 1, width: width / 10, justifyContent: 'center', paddingHorizontal: 5 }}>
                                <Text>g</Text>
                            </View>
                        </View>
                        <TextInput
                            style={{ height: height / 16, borderWidth: 1, borderColor: '#CFCFCF', justifyContent: 'center', paddingHorizontal: 5, borderRadius: 5 }}
                            placeholder='Enter weight'
                            onChangeText={(text) => {
                                this.setState({
                                    Calo: text * (infor.calo) / 100
                                })
                            }}
                            placeholderTextColor='#CFCFCF'
                        >

                        </TextInput>
                    </View>
                    <View style={{
                        backgroundColor: '#EEEEE0',
                        height: height / 13,
                        borderBottomColor: '#888888',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        padding: 10,
                        borderTopWidth: 0.5,
                        borderTopColor: '#888888'
                    }}>
                        <Text>DINH DƯỠNG</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        height: height / 15,
                        borderBottomColor: '#888888',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <View style={{ height: height / 15, flexDirection: 'row' }}>
                            <View style={{ height: height / 20, width: 5 * width / 10, justifyContent: 'center', paddingHorizontal: 5 }}>
                                <Text>Mỗi 100 gram</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: height / 20, marginLeft: 5, width: 5 * width / 10, justifyContent: 'center', paddingHorizontal: 5 }}>
                                <AntDesign name="check" size={10} color="#0066FF" />
                                <Text> Mỗi 1 chén</Text>
                            </View>
                        </View>
                    </View>
                    <View style={choiceStyle}
                    >
                        <Text>Calo</Text>
                        <View></View>
                        <Text>{infor.calo}</Text>
                    </View>
                    <View style={choiceStyle}
                    >
                        <Text>Protein động vật</Text>
                        <View></View>
                        <Text>{infor.pvd}</Text>
                    </View>
                    <View style={choiceStyle}
                    >
                        <Text>Protein Thực vật</Text>
                        <View></View>
                        <Text>{infor.pvt}</Text>
                    </View>
                    <View style={choiceStyle}
                    >
                        <Text>Chất xơ</Text>
                        <View></View>
                        <Text>10</Text>
                    </View>
                    <View style={choiceStyle}
                    >
                        <Text>Chất xơ</Text>
                        <View></View>
                        <Text>10</Text>
                    </View>
                </ScrollView>
            </View>

        );
    }
}
function mapStateToProps(state) {
    return {
        calosang: state.calosang,
        calotoi: state.calotoi,
        calotrua: state.calotrua,
        calonhe: state.calonhe,
    }
}
export default connect(mapStateToProps, { themcalonhe, themcalosang, themcalotoi, themcalotrua })(ListFood)
const styles = StyleSheet.create({
    styleContainer: {
        height: height / 12,
        flexDirection: 'row',
        backgroundColor: "#F8F8FF",
        alignItems: 'center',
        //  justifyContent: 'space-between',
        borderBottomColor: '#888888',
        borderBottomWidth: 0.5,
        padding: 5,
    },
    imageStyle: {
        height: 2 * height / 5,
        width: width
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