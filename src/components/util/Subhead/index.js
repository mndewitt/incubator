// @flow
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type Props = {
  text: string,
}

const Subhead = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

export default Subhead
