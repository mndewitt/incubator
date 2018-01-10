import { StackNavigator } from 'react-navigation'
import { stackNavigationOptions } from './config'

// AppSetup
import AppSetup from 'src/components/appSetup/AppSetup'

// Auth
import Login from 'src/components/login/Login'
import Signup from 'src/components/signup/Signup'

// Home
import HomeScreen from 'src/components/home/Home'

const RootNavigator = StackNavigator({
  AppSetup: {
    screen: AppSetup,
    navigationOptions: stackNavigationOptions,
  },
  Login: {
    screen: Login,
    navigationOptions: stackNavigationOptions,
  },
  Signup: {
    screen: Signup,
    navigationOptions: stackNavigationOptions,
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: stackNavigationOptions,
  },
})

export default RootNavigator
