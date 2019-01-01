import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import ListFoodView from './ListFoodView'
const dataa = require('../../../data/dataCaloFood.json');
const { width, height } = Dimensions.get('window');
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
class ListFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null
        }

    }
    takeImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatar: source,
                });
            }
        });
    }
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        const namee=this.props.navigation.state.params.name;
        const { styleContainer, textStyle, txtbackStyle, iconStyle, textInputStyle } = styles;
        return (
            <View>
                <View style={styleContainer}>
                    <View style={iconStyle}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { this.goBack() }}
                        >
                            <Icon name="ios-arrow-back" size={30} color="#0066FF" />
                            <Text style={txtbackStyle}>Hôm nay</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={textStyle}>{namee}</Text>
                    </View>
                    <TouchableOpacity onPress={this.takeImage.bind(this)}>
                        <Icon name="ios-add" size={30} color="#0066FF" />
                    </TouchableOpacity>
                </View>
                <View style={textInputStyle}>
                    <View style={{
                        margin: 8, borderRadius: 7, borderColor: 'gray',
                        borderWidth: 0.5, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center'
                    }}>
                        <Icons name="search" size={25} color="#DCDCDC" />
                        <TextInput
                            style={{ marginBottom: 1, marginTop: 1, marginLeft: 2, width: 4 * width / 5 }}
                        />
                    </View>
                </View>
                <ListFoodView namee={namee}/>
            </View>

        );
    }
}
export default connect()(ListFood)
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