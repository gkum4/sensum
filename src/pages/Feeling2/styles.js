import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30 + getStatusBarHeight(true),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  topContainer: {
    flexDirection: 'row',
    paddingVertical:15,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemContainer: {
    height: 70,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.166)',
    borderRadius: 8,
    marginBottom: 20,
  },
  itemColorContainer: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    zIndex: 0,
    position: 'absolute',
    borderRadius: 8,
  },
  itemContentContainer: {
    zIndex: 2,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingHorizontal: 15,
  },
  itemRightContainer: {
    marginTop: 17.5,
    marginRight: 15,
    right: 0,
    zIndex: 4,
    position: "absolute",

  },
  itemQuestionMarkContainer: {
    height: 35,
    width: 35,
    backgroundColor: 'rgba(255,255,255,0.166)',
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  dialogContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogTitleText: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#fff',
    marginTop: 10,
    marginBottom: 15
  },
  dialogDescriptionText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  dialogButtonContainer: {
    backgroundColor: '#03A9F4',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  dialogButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  nextButtonContainer: {
    backgroundColor: '#03A9F4',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default styles
