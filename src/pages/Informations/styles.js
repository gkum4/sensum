import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingTop: 40 + getStatusBarHeight(),
  },
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 15 + getStatusBarHeight(),
  },
  container: {
    flex: 1,
    paddingHorizontal: 60,
    alignItems:'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 40,
  },
  titleText: {
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign:'center',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor:'#fff',
    color: '#fff',
    marginBottom: 30,
    width: '100%',
    paddingVertical: 8,
    fontSize: 17,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.166)',
  },
  containerCheckBox: {
    marginTop: 10,
    marginHorizontal:20,
    flexDirection: 'row',
  },
  checkBoxIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxTextContainer: {
    margin:10,
  },
  checkBoxText: {
    color:'#FFFFFF',
    marginHorizontal: 5,
    fontSize: 14,
    textAlign:'justify',
  },
  containerButton: {
    marginTop: 40,
    backgroundColor: '#03A9F4',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  containerText3: {
    color:'#fff',
    fontWeight:'bold',
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.166)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginTop: 15,
    fontSize: 27,
    fontWeight: 'bold',
  },
});

export default styles;
