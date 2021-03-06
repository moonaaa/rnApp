import {combineReducers} from 'redux'
import {createNavigationReducer} from 'react-navigation-redux-helpers'
import AppNavigator from './index'
import {messageList} from './Home/reducer'

const navReducer = createNavigationReducer(AppNavigator)

export default combineReducers({
    nav: navReducer,
    messageList
})