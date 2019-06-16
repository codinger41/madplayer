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
  curvedBack: {
    backgroundColor: colors.background,
    height: metrics.height,
    width: metrics.width,
    borderTopRightRadius: 70,
    position: 'absolute',
    top: metrics.height * 0.2
  },
  title: {
    marginTop: metrics.height * 0.02,
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold'
  },
  artist: {
    color: colors.grey,
    marginTop: metrics.height * 0.05
  },
  albumArt: {
    width: metrics.width * 0.5,
    height: metrics.width * 0.5,
    position: 'absolute',
    left: metrics.width * 0.1,
    top: -(metrics.height * 0.06),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.accent
  },
  details: {
    width: metrics.width * 0.9,
    height: metrics.height * 0.2,
    alignSelf: 'center',
    marginTop: metrics.height * 0.2,
    marginLeft: metrics.width * 0.1
  },
  underline: {
    width: metrics.width * 0.15,
    height: metrics.height * 0.007,
    backgroundColor: colors.accent,
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    height: metrics.height * 0.1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsRow: {
    flexDirection: 'row',
    height: metrics.height * 0.1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: metrics.width * 0.2
  },
  timestamp: {
    color: colors.grey,
    marginHorizontal: 10
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: metrics.width * 0.6,
    height: metrics.height * 0.15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  largeBtn: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});
