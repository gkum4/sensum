import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageBackground:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  textTitulo:{
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  inputContainer:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(0,0,0,0.16)',
    width: 200,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 60,
  },
  input:{
    textAlign: 'center',
    fontSize: 27,
    color: '#fff',
    letterSpacing: 10,
    width: 200,
  },
  buttonContainer:{
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#03A9F4',
    marginHorizontal: 20,
    borderRadius: 8,
    width: 150,
    paddingVertical: 8,
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },


})
