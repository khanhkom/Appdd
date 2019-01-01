import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Text
} from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Congthucnauan from './Menu/Congthucnauan';
import TinhCalo from './Menu/TinhCalo';
import Baitap from './Menu/Baitap';
import global from './global';
import Home from './Home/Home';
import ListFood from './Home/ListFood/ListFood.js';
import FoodDetail from './Home/ListFood/FoodDetail';
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state=({
            FoodSang:[],
            FoodTrua:[],
            FoodToi:[],
            FoodNhe:[],
        })
        global.gotoDrawer = this.OpenDrawer.bind(this);
        global.closeDrawer = this.CloseDrawer.bind(this);
        global.gotoListFood = this.gotoListFood.bind(this);
        global.gotoFoodDetail = this.gotoFoodDetail.bind(this);
    }
    OpenDrawer() {
        this.props.navigation.openDrawer()
    }
    CloseDrawer() {
        this.props.navigation.closeDrawer()
    }
    gotoListFood(info){
        this.props.navigation.navigate('ListFood',{name:info});
    }
    gotoFoodDetail(infor,namee){
        this.props.navigation.navigate('FoodDetail',{info:infor,name:namee})
    }
    addFoodToBuaSang(Food,calo) {
        //const isExist = this.state.FoodToi.some( e => e.product.id === product.id)
        //if (isExist) return false;
        this.setState(
            { FoodSang: this.state.FoodSang.concat({ food, calo: calo }) },
            () => {
                saveFoodSang(this.state.FoodSang);
            })
            ;

    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.OpenDrawer.bind(this)} />
                <Home />
            </View>
        )
    }
}
const MainScreen = createStackNavigator({
    Main: Main,
    ListFood: ListFood,
    FoodDetail:FoodDetail,
},
    {
        headerMode: 'none'
    }
)
export const MyMain = createDrawerNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            drawerLabel: "Main",
        }
    },
    Baitap: {
        screen: Baitap,
        navigationOptions: {
            drawerLabel: "Bai tap",
        }
    },
    Congthucnauan: {
        screen: Congthucnauan,
        navigationOptions: {
            drawerLabel: "Cong thuc nau an",
        }
    },
    TinhCalo: {
        screen: TinhCalo,
        navigationOptions: {
            drawerLabel: "Tinh Calo",
        }
    },
},
    {
        contentOptions: {
            activeTintColor: 'blue',
            showIcon: true,
            inactiveBacColor: 'white',
            upperCaseLabel: false,
        },
        drawerBackgroundColor: "#34B089",
        contentComponent: (progs) => (
            <Menu navigation={progs.navigation} />
        ),
        navigationOptions: {
            drawerLockMode: 'unlocked'
        },
        drawerWidth: 300,
    }
);
export default createAppContainer(MyMain)
