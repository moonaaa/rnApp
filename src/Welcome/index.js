import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
   
  } from 'react-native';
export default class Welcome extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('main')
        }, 2000);
    }
    render() {
      return (
       <View >
          <Text>welcome</Text>
       </View>
      )
    }
  }
  