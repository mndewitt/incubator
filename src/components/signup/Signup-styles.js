import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    padding: 10,
  },
  button: {
    width: width - 20,
    marginTop: 10,
  },
})

export default styles
