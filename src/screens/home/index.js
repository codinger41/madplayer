import React, { useEffect } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../components/card';
import Miniplayer from '../../components/miniPlayer';
import styles from './styles';
import colors from '../../utils/colors';

const Home = (props) => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
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
          <Text style={styles.tracksStats}>244 Tracks</Text>
        </View>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0.02, y: 0.1}} end={{x: 0.5, y: 0.50}}
              colors={[colors.purple, colors.accent]}
              style={styles.shuffleButton}>
                <Text style={styles.shuffleText}>SHUFFLE PLAY</Text>
            </LinearGradient>
          </TouchableOpacity>
        <ScrollableTabView
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor={colors.accent}
          style={styles.tabBar}
        >
          <View tabLabel="TRACKS">
            <Card />
            <Card />
            <Card />
          </View>
          <View tabLabel="ALBUMS">
          </View>
          <View tabLabel="ARTISTS">
          </View>
        </ScrollableTabView>
      </ScrollView>
      <Miniplayer />
    </View>
  )
};

export default Home;
