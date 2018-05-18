import React, { Component } from 'react'
import { View } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements'
import { storeUserCredentials } from 'src/services/auth'
import styles from './Login-styles'

export class Login extends Component {
  static navigationOptions = {
    title: 'Log In',
    headerBackTitle: null,
    headerLeft: null,
  }

  state = {
    loading: false,
    email: '',
    password: '',
    error: false,
    missingFieldErr: false,
  }

  login = () => {
    const { navigation } = this.props
    const { apiService } = this.props.screenProps
    const { email, password } = this.state

    this.setState({ loading: true, error: false, missingFieldErr: false })

    if (!email.length || !password.length) {
      this.setState({ loading: false, missingFieldErr: true })
    } else {
      apiService
        .login(email, password)
        .then(() => {
          return storeUserCredentials(email, password)
        })
        .then(() => {
          this.setState({ loading: false })
          navigation.navigate('Home')
        })
        .catch(() => {
          this.setState({ loading: false, error: true })
        })
    }
  }

  updateEmail = email => {
    this.setState({ email })
  }

  updatePassword = password => {
    this.setState({ password })
  }

  goToSignup = () => {
    const { navigation } = this.props
    navigation.navigate('Signup')
  }

  renderError() {
    const { error } = this.state

    if (!error) {
      return null
    }

    return (
      <FormValidationMessage>
        {
          'The email and/or password you entered was incorrect.  Please try again.'
        }
      </FormValidationMessage>
    )
  }

  renderMissingFieldErr() {
    const { missingFieldErr } = this.state

    if (!missingFieldErr) {
      return null
    }

    return (
      <FormValidationMessage>
        {'Please enter both your email and password.'}
      </FormValidationMessage>
    )
  }

  render() {
    const { loading } = this.state
    return (
      <View style={styles.container}>
        <FormLabel>
          {'Email'}
        </FormLabel>
        <FormInput
          autoCapitalize={'none'}
          autoCorrect={false}
          inputStyle={styles.inputContainer}
          onChangeText={this.updateEmail}
          placeholder={'Enter your email...'}
        />
        <FormLabel>
          {'Password'}
        </FormLabel>
        <FormInput
          inputStyle={styles.inputContainer}
          onChangeText={this.updatePassword}
          placeholder={'Enter your password...'}
          secureTextEntry={true}
        />
        {this.renderError()}
        {this.renderMissingFieldErr()}
        <Button
          buttonStyle={styles.button}
          disabled={loading}
          large
          onPress={this.login}
          title="Sign In"
        />
        <Button
          buttonStyle={styles.button}
          disabled={loading}
          large
          onPress={this.goToSignup}
          title="Sign Up"
        />
      </View>
    )
  }
}

export default Login
