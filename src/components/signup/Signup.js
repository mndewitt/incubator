import React, { Component } from 'react'
import { View } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements'
import { storeUserCredentials } from 'src/services/auth'
import styles from './Signup-styles'

export class Signup extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  }

  state = {
    loading: false,
    email: '',
    password: '',
    confirmPassword: '',
    passwordMismatch: false,
    errMessage: null,
  }

  constructor() {
    super()

    const self = this
    self.updateEmail = this.updateEmail.bind(this)
    self.updatePassword = this.updatePassword.bind(this)
    self.updateConfirmPassword = this.updateConfirmPassword.bind(this)
    self.signup = this.signup.bind(this)
    self.renderPasswordMismatch = this.renderPasswordMismatch.bind(this)
    self.renderErrMessage = this.renderErrMessage.bind(this)
  }

  signup() {
    const { navigation } = this.props
    const { apiService } = this.props.screenProps
    const { email, password, confirmPassword } = this.state

    this.setState({ loading: true, passwordMismatch: false, errMessage: null })

    if (password !== confirmPassword) {
      this.setState({ loading: false, passwordMismatch: true })
    } else {
      apiService
        .signup(email, password)
        .then(() => {
          return storeUserCredentials(email, password)
        })
        .then(() => {
          this.setState({ loading: false })
          navigation.navigate('Home')
        })
        .catch(err => {
          console.log(err)
          this.setState({ loading: false, errMessage: err.message })
        })
    }
  }

  updateEmail(email) {
    this.setState({ email })
  }

  updatePassword(password) {
    this.setState({ password })
  }

  updateConfirmPassword(confirmPassword) {
    this.setState({ confirmPassword })
  }

  renderPasswordMismatch() {
    const { passwordMismatch } = this.state

    if (!passwordMismatch) {
      return null
    }

    return (
      <FormValidationMessage>
        {'Make sure your passwords match.'}
      </FormValidationMessage>
    )
  }

  renderErrMessage() {
    const { errMessage } = this.state

    if (!errMessage) {
      return null
    }

    return (
      <FormValidationMessage>
        {errMessage}
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
          placeholder={'Enter a password...'}
          secureTextEntry={true}
        />
        <FormLabel>
          {'Confirm Password'}
        </FormLabel>
        <FormInput
          inputStyle={styles.inputContainer}
          onChangeText={this.updateConfirmPassword}
          placeholder={'Confirm your password...'}
          secureTextEntry={true}
        />
        {this.renderPasswordMismatch()}
        {this.renderErrMessage()}
        <Button
          buttonStyle={styles.button}
          disabled={loading}
          large
          onPress={this.signup}
          title="Sign Up"
        />
      </View>
    )
  }
}

export default Signup
