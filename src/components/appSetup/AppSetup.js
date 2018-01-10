import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { getUserCredentials } from 'src/services/auth'
import { green } from 'src/styles/colors'
import styles from './AppSetup-styles'

class AppSetup extends Component {
  static navigationOptions = {
    title: 'Loading...',
  }

  componentDidMount() {
    const { navigation } = this.props
    const { apiService } = this.props.screenProps

    getUserCredentials()
      .then(res => {
        const email = res[0]
        const password = res[1]

        if (!email || !password) {
          return Promise.reject()
        }

        return apiService.login(email, password)
      })
      .then(() => {
        navigation.navigate('Home')
      })
      .catch(() => {
        navigation.navigate('Login')
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={green} size="large" />
      </View>
    )
  }
}

export default AppSetup
