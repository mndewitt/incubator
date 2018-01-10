import React from 'react'
import RootNavigator from './navigation'
import * as firebase from 'firebase'
import ApiService from 'src/services/api'

const firebaseConfig = {
  // Sub appropriate creds below...
  // eslint-disable-next-line no-undef
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'incubator-6f57c.firebaseapp.com',
  databaseURL: 'https://incubator-6f57c.firebaseio.com',
  projectId: 'incubator-6f57c',
  storageBucket: 'incubator-6f57c.appspot.com',
  messagingSenderId: '12427189307',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const apiService = new ApiService(firebaseApp)

const App = () => {
  return <RootNavigator screenProps={{ apiService }} />
}

export default App
