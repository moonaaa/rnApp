/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';
import AppNavigator from './src'
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import combineReducers from './src/reducer'
import {messageList} from './src/Home/reducer'
const {height, width} = Dimensions.get('window')

 const AppReduxContainer = createReduxContainer(AppNavigator)
 const middleware = createReactNavigationReduxMiddleware(state=>state.nav)

 const mapStateToProps = state => ({
   state: state.nav
 })
 const AppWithNavState = connect(mapStateToProps)(AppReduxContainer)
 const store = createStore(combineReducers, applyMiddleware(middleware))
export default class App extends Component {
 
  render(){
    return (
      <Provider store={store} style={{flex:1}}>
        <StatusBar barStyle='dark-content'/>
        <AppWithNavState />
      </Provider>
    )
  }
}

