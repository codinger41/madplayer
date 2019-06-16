import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider from './slider';
import metrics from '../utils/metrics';
import colors from '../utils/colors';


export default () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.trackDetails}>
          <Text style={styles.title}>Antidote</Text>
          <Text style={styles.demarcator}>-</Text>
          <Text style={styles.artist}>Travis Scott</Text>
        </View>
      </View>
      <View style={[styles.row, styles.bottom]}>
        <TouchableOpacity style={styles.icon}>
          <Entypo
            name="controller-play"
            color={colors.accent}
            size={30}
          />
        </TouchableOpacity>
          <Slider
            value={0.2}
            minimumTrackTintColor='#ec4c46'
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            onValueChange={value => console.log(value)}
          />
        <TouchableOpacity style={styles.icon2}>
          <Entypo
            name="controller-stop"
            color={colors.accent}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  card: {
    height: metrics.height * 0.13,
    flexDirection: 'column',
    backgroundColor: colors.background,
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: metrics.height * 0.87,
      },
      android: {
        position: 'absolute',
        top: metrics.height * 0.84,
      }
    }),
    borderTopRightRadius: 70,
    alignSelf: 'center',
    width: metrics.width
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10
  },
  trackDetails: {
    marginLeft: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: metrics.height * 0.03
  },
  title: {
    fontWeight: 'bold',
    color: colors.white
  },
  artist: {
    color: '#939ba5',
  },
  demarcator: {
    marginHorizontal: 10,
    color: '#939ba5',
    fontWeight: 'bold'
  },
  icon: {
    // marginLeft: metrics.width * 0.3,
    // marginTop: 5,
  },
  icon2: {
    marginLeft: metrics.width * 0.02,
  },
  row: {
    flexDirection: 'row',
  },
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
  bottom: {
    marginBottom: metrics.height * 0.1,
    alignSelf: 'center',
    width: metrics.width * 0.9,
    alignItems: 'center',
    height: 50,
  }
});
