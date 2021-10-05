import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const IconButton = ({
  text,
  iconName,
  onPress,
  width,
  bgColor = 'tomato',
  fontColor = 'white'
}) => {

  const buttonStyle = () => {
    return {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor,
      width: 200,
      padding: 5,
      margin: 5,
      borderRadius: 5
    }
  }

  const textStyle = () => {
    return {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
      padding: 5
    }
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle()}>
        <Ionicons name={iconName} size={23} color="#e3e3e3"/>
        <Text style={textStyle()}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}


export default IconButton;
