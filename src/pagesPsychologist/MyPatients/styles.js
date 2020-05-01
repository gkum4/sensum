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
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerPacientes:{
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.16)',
    padding: 15,
    borderRadius: 8,
    flexDirection:'row',
    marginBottom: 15,
  },

  itemNameText:{
    color:'#FFFFFF',
    fontSize:24,
    fontWeight: 'bold',
  },

  itemPointsText:{
    color:'#FFFFFF',
    fontSize:24,
    fontWeight: 'bold'
  },

  imagemPerfil: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 20,
  },


})
