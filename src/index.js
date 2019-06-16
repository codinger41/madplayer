import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/home';
import NowPlaying from './screens/nowplaying';

const App = createStackNavigator({
  Home: { screen: Home },
  NowPlaying: { screen: NowPlaying }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

export default createAppContainer(App);
