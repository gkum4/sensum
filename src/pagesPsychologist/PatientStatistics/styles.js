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
  expressionsButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  expressionButtonContainer: {
    padding: 5,
    borderRadius: 8,
  },
  centerExpressionButtonContainer: {
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 8,
  },
  barsContainer: {
    backgroundColor: 'rgba(255,255,255,0.166)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 30
  },
  itemContainer: {
    flexDirection: 'row',
    height: 80,
  },
  itemEmotionContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemPercentageText: {
    color: '#fff',
    fontSize: 11,
  },
  itemEmotionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 2,
  },
  itemVerticalBar: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.166)',
    width: 5,
  },
  itemRightContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  itemPercentageBarViewContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  itemPercentageBarContainer: {
    backgroundColor: 'rgba(255,255,255,0.166)',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  itemNumberOfTimesText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  recommendationsFrequencyTable: {
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.166)',
    borderRadius: 8,
    width: '100%',
  },
  recommendationsFrequencyTableTitleContainer: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  recommendationsFrequencyTableTitleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 21,
  },
  recommendationsFrequencyTableItemContainer: {
    height: 20,
    marginBottom: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 7,
  },
  recommendationsFrequencyTableItemText: {
    color: '#fff',
    fontSize: 14,
  }
});

export default styles;
