import { green } from 'src/styles/colors'

export const stackNavigationOptions = ({ navigationOptions }) => {
  return {
    ...navigationOptions,
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: green,
    },
  }
}
