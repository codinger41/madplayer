import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import metrics from '../utils/metrics';
import colors from '../utils/colors';


export default () => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.row}>
        <Image
          style={styles.image}
          source={require('../assets/images/music.jpeg')}
        />
        <View style={styles.trackDetails}>
          <Text style={styles.title}>Antidote</Text>
          <Text style={styles.artist}>Travis Scott</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Entypo
          name="controller-play"
          color={colors.accent}
          size={30}
        />
      </TouchableOpacity>
    </View>
  )
};


const styles = StyleSheet.create({
  card: {
    height: metrics.height * 0.09,
    flexDirection: 'row',
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: metrics.height * 0.06
  },
  title: {
    fontWeight: 'bold'
  },
  artist: {
    color: '#939ba5',
  },
  icon: {
    marginLeft: metrics.width * 0.36,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
  }
});
