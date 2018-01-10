import { StyleSheet } from 'react-native'
import { green } from 'src/styles/colors'

const styles = StyleSheet.create({
  body: {
    backgroundColor: green,
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  icon: {
    marginLeft: 'auto',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
  },
})

export default styles
