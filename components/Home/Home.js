import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import BuaSang from '../Home/BuaSang';
import BuaTrua from '../Home/BuaTrua';
import BuaToi from '../Home/BuaToi';
import BuaAnNhe from '../Home/BuaAnNhe';
const TabNavigator = createMaterialTopTabNavigator({
    BuaSang: {
        screen: BuaSang,
        navigationOptions: {
            tabBarLabel: "BỮA SÁNG",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="free-breakfast" size={20} color={tintColor} />
            )
        }
    },
    BuaTrua: {
        screen: BuaTrua,
        navigationOptions: {
            tabBarLabel: "BỮA TRƯA",
            tabBarIcon: ({ tintColor }) => (
                <Icons name="food-variant" size={20} color={tintColor} />
            )
        }
    },
    BuaToi: {
        screen: BuaToi,
        navigationOptions: {
            tabBarLabel: "BỮA TỐI",
            tabBarIcon: ({ tintColor }) => (
                <Icons name="food-fork-drink" size={20} color={tintColor} />
            )
        }
    },
    BuaAnNhe: {
        screen: BuaAnNhe,
        navigationOptions: {
            tabBarLabel: "BỮA ĂN NHẸ",
            tabBarIcon: ({ tintColor }) => (
                <Icons name="food" size={20} color={tintColor} />
            )
        }
    }
},
    {
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#2196f3',
            inactiveTintColor: '#2E272B',
            upperCaseLabel: false,
            labelStyle: {
                fontSize: 11, margin: 3,
            },
            tabStyle: {
                height: 50,
            },
            style: {
                backgroundColor: "#F8F8FF",
            },

        },
        tabBarPosition: "top",
    }
);
export default createAppContainer(TabNavigator);