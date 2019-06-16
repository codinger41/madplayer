import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: metrics.width,
  },
  image: {
    width: metrics.width,
    height: metrics.height * 0.3,
  },
  whiteBack: {
    backgroundColor: colors.white,
    height: metrics.height,
    width: metrics.width,
    borderTopRightRadius: 70,
    position: 'absolute',
    top: metrics.height * 0.2
  },
  title: {
    marginLeft: metrics.width * 0.05,
    marginTop: metrics.height * 0.02,
    flexDirection: 'column',
    height: metrics.height * 0.1,
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: 23,
    color: colors.background,
    fontWeight: 'bold'
  },
  titleH2: {
    color: '#939ba5',
    marginLeft: -5
  },
  tracksStats: {
    color: colors.accent,
    fontWeight: 'bold'
  },
  shuffleButton: {
    alignSelf: 'center',
    marginTop: metrics.height * 0.01,
    width: metrics.width * 0.6,
    height: metrics.height * 0.07,
    backgroundColor: colors.accent,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shuffleText: {
    color: colors.white,
    fontWeight: 'bold'
  },
  tabBarUnderline: {
    backgroundColor: colors.accent,
    alignSelf: 'center',
  },
  tabBar: {
    alignSelf: 'center',
    marginHorizontal: metrics.width * 0.06,
    marginTop: metrics.height * 0.01
  }
});
