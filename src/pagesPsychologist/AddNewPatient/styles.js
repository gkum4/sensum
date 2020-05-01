import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { getBottomSpace } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
   imageBackground:{
    flex: 1,
    resizeMode: 'cover',
    padding: 15,
    paddingBottom: 0,

   },
   container:{
    flex: 1,
    paddingTop: 30 + getStatusBarHeight(true),
    paddingBottom: getBottomSpace(),
    minHeight: '100%',
   },

   subContainer:{
      alignItems:'center',
      justifyContent:'center',
      flex: 1,

   },

   containerText1:{
      color:'#FFFFFF',
      marginHorizontal: 20,
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 32,
   },


   containerInput:{
      backgroundColor:'rgba(0,0,0,0.16)',
      marginHorizontal: 20,
      padding:10,
      paddingHorizontal:60,
      fontSize: 18,
      borderRadius:10,
      marginBottom: 30,
   },
   textInput:{
      color:'#FFFFFF',
      fontSize: 21,
      textAlign: 'center',
   },
   buttonContainer:{
      alignItems:'center',
      justifyContent:'center',
   },
   button: {
     width: 150,
     height: 50,
     backgroundColor:'#03A9F4',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:8,
   },
   textButton:{
      color:'#fff',
      fontSize:18,
      textAlign:'center',
   },
   topContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

})
