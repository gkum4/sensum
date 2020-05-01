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
    padding: 15,
    paddingBottom: 0,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  boxContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.166)',
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  activitiesTitleContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  activitiesTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 17,
    textAlignVertical: 'center',
    marginLeft: 10,
  },
});

export default styles;
