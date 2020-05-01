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
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 34,
  },
  listItemTopFeelingColors: {
    height: 4,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 7,
  },
  listItemContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.166)',
    height: 44,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  listItemRowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  listItemStar: {
    marginRight: 10,
    color:'#FFEE58',
  },
  listItemText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  listItemIconsContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  listItemBar: {
    marginLeft: 10,
    height: 30,
    width: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  userIdContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center'

  },
  userIdText: {
    color: 'rgba(255,255,255,0.166)',
    fontSize: 11,
    fontWeight: 'bold',
  }
})

export default styles
