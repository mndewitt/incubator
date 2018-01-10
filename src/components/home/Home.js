import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { Subhead } from 'src/components/util'
import styles from './Home-styles'

export class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: null,
    headerLeft: null,
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>
          {'Logged In'}
        </Text>
      </View>
    )
  }
}

export default Home
