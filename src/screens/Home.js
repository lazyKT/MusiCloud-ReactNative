import * as React from "react";
import { View, SafeAreaView, Text, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Search from './Search.js'

Ionicons.loadFont()

const matchParent = Dimensions.get('window').width;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  player: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 85,
    width: matchParent-10,
    height: 70,
    margin: 5,
    backgroundColor: 'gainsboro'
  }
});

const Song = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text>Song</Text>
      </SafeAreaView>
    );
}


const Setting = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text>Setting</Text>
      </SafeAreaView>
    )
}

const Tab = createBottomTabNavigator();


const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Song') {
              iconName = 'musical-notes';
            }
            else if (route.name === 'Setting') {
              iconName = 'settings-sharp';
            }
            else if (route.name === 'Search') {
              iconName = 'search';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'cornflowerblue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Song" component={Song}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Setting" component={Setting}/>
      </Tab.Navigator>
      <View style={styles.player}>
        <Text>Test</Text>
      </View>
    </NavigationContainer>
  );
}


export default Home;
