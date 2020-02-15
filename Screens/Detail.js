import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
   
  } from 'react-native';
export default class Detail extends Component {
  static navigationOptions = (props)=> {
    const {navigation} = props
    const {state:{params}} = navigation
    return {
      title:'2',
      headerRight: (
        <Button title="btn"  onPress={() => navigation.navigate('Third')} />
      )
    }
  }
    render() {
      return (
       <View >
           <Text>
               detail
           </Text>
       </View>
      )
    }
  }
  