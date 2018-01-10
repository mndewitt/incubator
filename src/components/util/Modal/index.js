import React from 'react'
import { View, Text, Modal } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

const AppModal = ({ onClose, children, title = '', ...rest }) => {
  return (
    <Modal {...rest}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Icon
            containerStyle={styles.icon}
            name="close"
            color="#FFFFFF"
            onPress={onClose}
            underlayColor="transparent"
          />
        </View>
        {children}
      </View>
    </Modal>
  )
}

export default AppModal
