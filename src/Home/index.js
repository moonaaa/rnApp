
 import MessageScreen from './HomeScreen'
 import HomeScreenDetail from './HomeScreenDetail'
  import { createStackNavigator } from 'react-navigation-stack';
  const HomeStackNavigator = createStackNavigator(
    {
      Home: {
        screen: MessageScreen
      },
      Detail: {
        screen: HomeScreenDetail
      }
    }
  )
  HomeStackNavigator.navigationOptions = ({navigation})=>{
    let tabBarVisible = true
    if(navigation.state.index>0){
      tabBarVisible = false
    }
    return {
      tabBarVisible,
    }
  }
  export default HomeStackNavigator
  