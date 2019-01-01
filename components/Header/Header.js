import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import global from '../global';
const {height,width}=Dimensions.get('window')
class Header extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {styleContainer,textStyle,caloStyle,iconStyle} = styles;
    return (
      <View style={styleContainer}>
        <View style={iconStyle}>
          <TouchableOpacity
            onPress={() => { global.gotoDrawer() }}
          >
            <Icon name="ios-menu" size={35} color="#0066FF" />
          </TouchableOpacity>
        </View>
        <Text style={textStyle}>Hôm nay</Text>
        <View >
        <Text style={caloStyle}>Calo {this.props.myCaloSang+this.props.myCaloTrua+this.props.myCaloToi+this.props.myCaloNhe}</Text>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state){
  return{ myCaloSang: state.calosang, myCaloTrua:state.calotrua,myCaloToi:state.calotoi,myCaloNhe:state.calonhe}
}
export default connect(mapStateToProps)(Header)
var styles = StyleSheet.create({
  styleContainer: {
    height:height/12,
    flexDirection: 'row',
    backgroundColor: "#F8F8FF",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#888888',
    borderBottomWidth: 0.5,
  },
  textStyle: {
    color: '#000011',
    fontFamily: 'Lato-Bold',
    fontSize: 15,
  },
  caloStyle: {
    color: '#0066FF',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    marginRight: 5,
  },
  iconStyle: {
    marginLeft: 5,
  },

})