import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,

} from 'react-native';
import Home from './Home';
import Message from './Message';
import My from './My';
import Company from './Company';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import Welcome from './Welcome/index'

var RootTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: '首页'
            }
        },
        Company: {
            screen: Company,
            navigationOptions: {
                title: '公司'
            }
        },
        Message: {
            screen: Message,
            navigationOptions: {
                title: '信息'
            }
        },
        My: {
            screen: My,
            navigationOptions: {
                title: '我的'
            }
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation})=>({
            tabBarIcon: ({focused,tintColor,horizontal})=>{
                const {routeName} = navigation.state;
                let iconName;
                if(routeName === 'Home'){
                    iconName = 'globe';
                }else if(routeName === 'Company'){
                    iconName = 'building-o';
                }else if(routeName === 'Message'){
                    iconName = 'comments-o';
                }else if(routeName === 'My'){
                    iconName = 'user-circle-o';
                }
                return <Icon name={iconName} size={20} color={tintColor} />
            }
        }),
        tabBarOptions: {
            inactiveTintColor: 'pink',
            activeTintColor: 'red'
        }
    }
)
const AppInitNavigator =  createStackNavigator(
    {
        welcome: {
            screen: Welcome,
            navigationOptions:{
                header:null
            }
        }
    }
);
const switchNavigator = createSwitchNavigator(
    {
        init: AppInitNavigator,
        main: RootTabNavigator
    }
)
const AppNavigator = createAppContainer(switchNavigator);
export default AppNavigator

