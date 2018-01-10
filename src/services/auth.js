import { AsyncStorage } from 'react-native'
import { EMAIL_STORAGE_KEY, PASSWORD_STORAGE_KEY } from 'src/constants/storage'

export const storeUserCredentials = (email, password) => {
  if (!email.length || !password.length) {
    return Promise.reject()
  }

  return Promise.all([
    AsyncStorage.setItem(EMAIL_STORAGE_KEY, email),
    AsyncStorage.setItem(PASSWORD_STORAGE_KEY, password),
  ])
}

export const getUserCredentials = () => {
  return Promise.all([
    AsyncStorage.getItem(EMAIL_STORAGE_KEY),
    AsyncStorage.getItem(PASSWORD_STORAGE_KEY),
  ])
}
