import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Text,
    Button,
    TouchableHighlight,
    FlatList,
    RefreshControl
  } from 'react-native';
  import {APP, APIS} from '../Constrans/API'
  import {fetchGet} from '../utils/HttpTool'
  import {connect} from 'react-redux'
  import {setMessageList, updateMessageList} from './action'
  class HomeScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
        loading: true,
        // contentList: [],
        // page: 1,
        isFresh: false,
        showFoot: 0
      }
    }
    componentDidMount(){
      const {page} = this.props
     this.fetchMessage(page)
    }
    fetchMessage=(currPage)=>{
      const requestParams = {
        ...APP,
        page: currPage
      }
      fetchGet({
        serviceType: APIS.ServiceInit,
        params: requestParams,
        success:(response)=>{
          if(currPage===1){
            this.setState({
              loading:false,
              // messageList: response.list,
              isFresh: false,
              // page: currPage
            })
            const {setMessageList} = this.props
            setMessageList({
              list: response.list,
              page: currPage
            })
          }else{
            this.setState({
              loading:false,
              // contentList: this.state.messageList.concat(response.list),
              isFresh: false,
              // page:currPage,
              showFoot:0
            })
            const {updateMessageList} = this.props
            updateMessageList({
              list: this.props.messageList.concat(response.list),
              page: currPage
            })
          }
          
         
        },
        error: (error)=>{
          console.log(error);
          
        }
      })
    }
    render() {
      const {loading } = this.state
      const {messageList} = this.props
      return (
       <View >
          {loading?(
            <ActivityIndicator animating={true} color='blue' size='large' />
          ):(
            <FlatList 
              data={messageList}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              ListEmptyComponent={this._ListEmptyComponent}
              ListFooterComponent={this._ListFooterComponent}
              refreshControl={
                <RefreshControl 
                title='loading...'
                refreshing={this.state.isFresh}
                
                tintColor='pink'
                onRefresh={()=>{this._onRefreshData()}}
                onEndReached={this._onEndReached()}
                onEndReachedThreshold={0.1}
                />
              }
            />
          )}
       </View>
      )
    }
    _onEndReached= ()=>{
      const {showFoot} = this.state
      const page = this.props
      if(showFoot!=0){
        return;
      }
      this.setState({
        showFoot: 2
      })
      this.fetchMessage(page+1)
    }
    _onRefreshData = ()=>{
      this.setState({isFresh:true})
      this.fetchMessage(1)
    }
    _ListFooterComponent = ()=>{
      const {showFoot} = this.state
      if(showFoot === 1){
        return (
          <View>
            <Text>没有更多数据了</Text>
          </View>
          )
      }else  if(showFoot === 2){
        return (
          <View>
            <Text>正在加载更多数据</Text>
          </View>
          )
      }else if(showFoot === 0){
        return (
          <View>
            <Text></Text>
          </View>
          )
      }
     
    }
    _ListEmptyComponent = ()=>{
      return (
        <View>
          <Text>暂无数据</Text>
        </View>
      )
    }
    _keyExtractor = (item, index)=>`index_${index}_${item}`;
    _renderItem = ({item, index})=>{
        return (
         <TouchableHighlight
          onPress={()=>{
            this.props.navigation.navigate('Detail')
          }}
         >
            <Text>{item.name}</Text>
         </TouchableHighlight>
        )
    }
  }

   const MessageScreen = connect(
    state=>({
      page: state.messageList.page,
      messageList: state.messageList.list
    }),
    {setMessageList, updateMessageList}
  )(HomeScreen)
  export default MessageScreen