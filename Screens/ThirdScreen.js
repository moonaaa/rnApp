import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
   
  } from 'react-native';
export default class ThirdScreen extends Component {
 
    render() {
      return (
       <View >
           <Text>
           ThirdScreen
           </Text>
           <Button title="gg" onPress={()=>{
               this.props.navigation.popToTop();
           }} />
       </View>
      )
    }
  }
  