import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MyContext from '../context/MyContext';

const styles = StyleSheet.create ({
  playerContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 0.5,
      width: 0.5
    }
  },
  thumbnail: {
    height: 50,
    width: '15%'
  },
  infoContainer: {
    width: '70%',
    marginLeft: 20
  },
  title: {
    fontWeight: '500'
  },
  channel: {
    fontWeight: '300'
  }
});

const Player = () => {

  const {media} = useContext (MyContext);

  return (
    <View style={styles.playerContainer}>
      <Image style={styles.thumbnail} source={require('../res/images/logo.png')} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{media.title}</Text>
        <Text style={styles.channel}>{media.channel}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="play" size={30} color="#66AAFF"/>
      </TouchableOpacity>
    </View>
  );
}


export default Player;
