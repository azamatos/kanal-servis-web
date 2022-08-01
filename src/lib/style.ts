import { Dimensions, StyleSheet } from 'react-native'

const screenDimensions = Dimensions.get('screen')

export const dimension = {
  width: screenDimensions.width,
  height: screenDimensions.height,
}

const styles = StyleSheet.create({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsScreen: {
    margin: 10
  },
  cards: {
  
  },
  homeDiv: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 7,
    borderColor: '#27569C',
    height: screenDimensions.height / 2.1,
    width: screenDimensions.width / 1.2 ,
  },
  input: {
    borderWidth: 4, 
    width: screenDimensions.width / 1.8, 
    height: screenDimensions.height / 18, 
    borderRadius: 10,
    fontSize:16,
    paddingHorizontal:10,
  },
  authText: {
    fontSize: 30,
    color: '#27569C',
    fontWeight: 'bold',
    marginBottom:10
  },
  textStyle: {
    color:'#000',
    fontSize: 18, 
    fontWeight: 'bold'
  },  
  button: {
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 4,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  formStyle: {
    height: screenDimensions.height / 2.4,
    justifyContent:'space-between'
  },
  header: {
    justifyContent: 'space-between',
    backgroundColor: '#E4B062',
    height: dimension.height / 10
  },
  cardStyle: {
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    borderWidth:6,
    borderColor:'#27569C',
    width: 300,
    height: 300,
    borderRadius: 15,
    margin: 10
  }
})

export default styles
