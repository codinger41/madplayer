import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Card from '../../components/card';
import Miniplayer from '../../components/miniPlayer';
import styles from './styles';
import colors from '../../utils/colors';
import { getAllTracks } from '../../redux/actions/music';

const Home = (props) => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.background, true);
    }
    props.getAllTracks();
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/music.jpeg')}
        style={styles.image}
      />
      <ScrollView style={styles.whiteBack}>
        <View style={styles.title}>
          <Text style={styles.titleText}>MAD PLAYER</Text>
          <Text style={styles.titleH2}> Built with ❤ by Ola</Text>
          <Text style={styles.tracksStats}>{props.tracks.length} Tracks</Text>
        </View>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0.02, y: 0.1}} end={{x: 0.5, y: 0.50}}
              colors={[colors.purple, colors.accent]}
              style={styles.shuffleButton}>
                <Text style={styles.shuffleText}>SHUFFLE PLAY </Text>
            </LinearGradient>
          </TouchableOpacity>
        <View style={styles.tabBar}>
          <Card />
        </View>
      </ScrollView>
      <Miniplayer />
    </View>
  )
};

const mapStateToProps = state => state;

export default connect(() => mapStateToProps, { getAllTracks })(Home);
