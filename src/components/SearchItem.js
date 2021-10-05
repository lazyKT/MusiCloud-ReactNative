import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 5,
    margin: 5
  },
  thumbnail: {
    height: 50,
    width: '15%'
  },
  infoContainer: {
    margin: 5,
    width: '80%'
  },
  title: {
    fontWeight: '500'
  },
  channel: {
    fontWeight: '300'
  }
})


const SearchItem = ({item}) => {

  const showModal = () => {
    console.log ("Show Modal");
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => showModal()}
      >
      <Image style={styles.thumbnail}
        source={{uri:item.thumbnail_s}}
        />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.channel}>
          {item.channelTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}


export default SearchItem;
