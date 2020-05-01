import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { getBottomSpace } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30 + getStatusBarHeight(true),
    paddingBottom: getBottomSpace(),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  doneButtonContainer: {
    backgroundColor: '#03A9F4',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  doneButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  noteContainer: {
    backgroundColor: 'rgba(255,255,255,0.166)',
    marginTop: 15,
    borderRadius: 8,
    padding: 10,
    marginBottom: 30,
    minHeight: 200,
  },
  noteTitleTextInput: {
    width: '100%',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
  noteBodyContainer: {
    flex: 1,
    minHeight: 200,
    backgroundColor: 'rgba(255,255,255,0.166)',
    borderRadius: 8,
    padding: 15,
  },
  noteBodyTextInput: {
    flex: 1,
    fontSize: 21,
    color: '#fff',
  },
  micIconContainer: {
    backgroundColor: '#03A9F4',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10 + getBottomSpace(),
    right: 10,
  },
  camIconContainer: {
    backgroundColor: '#03A9F4',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 10 + getBottomSpace(),
    right: 80,
  },

  itemContainer: {
    height: 70,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.166)',
    borderRadius: 8,
    marginBottom: 15,
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
  addEmotionButton: {
    backgroundColor: '#03A9F4',
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  addEmotionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  audioContainer: {
    backgroundColor: 'rgba(255,255,255,0.166)',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 30,
  }
});

export default styles;
