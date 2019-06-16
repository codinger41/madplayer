import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import metrics from '../utils/metrics';
import colors from '../utils/colors';

export default () => {
  return (
    <View style={styles.slider}>
      <Slider
        value={0.2}
        minimumTrackTintColor={colors.accent}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        onValueChange={value => console.log(value)}
      />
    </View>
  )
};


const styles = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    width: metrics.width * 0.7,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  slider: {
    width: metrics.width * 0.7,
    height: 20,
    marginBottom: 20
  },
});
