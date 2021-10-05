import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

import IconButton from './IconButton'


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    height: 200,
    width: 200,
    margin: 15
  },
  title: {
    color: '#858585',
    fontWeight: '500',
    fontSize: 20,
    margin: 5
  },
  channel: {
    color: '#858585',
    fontWeight: '400',
    fontSize: 17,
    marginBottom: 20
  }
});


const Details = ({ infoType, data, hideModal }) => {

  console.log ("data", data);

  return (
    <SafeAreaView style={styles.container}>
    <Image
      style={styles.thumbnail}
        source={{uri:data.thumbnail_l}}
      />
      <Text
        numberOfLines={1}
        style={styles.title}
      >
        {data.title}
      </Text>
      <Text
        numberOfLines={1}
        style={styles.channel}
      >
        {data.channelTitle}
      </Text>
      <IconButton iconName="add" text="Add to Playlists" bgColor="#66AAFF" width='80%' />
      <IconButton iconName="close" text="Close" bgColor="tomato" onPress={hideModal}/>
    </SafeAreaView>
  )
}

export default Details;
