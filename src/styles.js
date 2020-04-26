import { StyleSheet } from 'react-native'

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%'
  },
  text: {
    fontSize: 24
  },
  bold: {
    fontWeight: 'bold'
  },
  boldCentered: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: '5%',
    width: 200
  }
})

export default commonStyles
