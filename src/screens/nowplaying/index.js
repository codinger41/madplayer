import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Slider from '../../components/slider';
import colors from '../../utils/colors';

const Home = ({ navigation: { goBack } }) => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/music.jpeg')}
        style={styles.image}
      />
      <TouchableOpacity onPress={() => goBack()} style={styles.backbutton}>
        <MaterialIcons
          name="arrow-back"
          color={colors.white}
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.curvedBack}>
        <Image
          style={styles.albumArt}
          source={require('../../assets/images/albumart.png')}
        />
        <View style={styles.details}>
          <Text style={styles.title}>ANTIDOTE</Text>
          <View style={styles.underline} />
          <Text style={styles.artist}>Travis Scott </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.timestamp}>3:15</Text>
          <Slider />
          <Text style={styles.timestamp}>3:14</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.smallBtn}
            activeOpacity={0.5}
          >
            <AntDesign
              name="stepbackward"
              color={colors.white}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.largeBtn}
            activeOpacity={0.5}
          >
            <Entypo
              size={40}
              color="white"
              name="controller-play"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smallBtn}
            activeOpacity={0.5}
          >
            <AntDesign
              name="stepforward"
              color={colors.white}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconsRow}>
          <TouchableOpacity>
            <Feather
              name="shuffle"
              color={colors.white}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="repeat"
              color={colors.white}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

export default Home;
