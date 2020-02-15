import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
   
  } from 'react-native';
  import StorageUtil from '../utils/StorageUtil'
export default class My extends Component {
 
    render() {
      return (
       <View >
          <Text>my</Text>
          <Button title='保存数据' onPress={()=>{
              StorageUtil.setData('key1', 'ffff').then(
                (result)=>{
                  Alert.alert(result)
                }
              )
          }} />
          <Button title='删除数据' onPress={()=>{
             StorageUtil.deleteData('key1').then(
              (result)=>{
                Alert.alert(result)
              }
            )
          }} />
          <Button title='获取数据' onPress={()=>{
             StorageUtil.getData('key1').then(
              (result)=>{
                Alert.alert(result)
              }
            )
          }} />

       </View>
      )
    }
  }
  