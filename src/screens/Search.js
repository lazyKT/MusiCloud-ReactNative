import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator
}
from 'react-native';

import SearchInput from '../components/SearchInput';
import SearchItem from '../components/SearchItem';
import { getSearchResults } from '../network/songRequests';


const styles = StyleSheet.create ({
  container: {
    paddingBottom: 80,
    flex: 1,
    flexWrap: 'wrap',
    width: '100%'
  },
  searchContainer: {
    flex: 1,
    width: '100%'
  },
  resultsContainer: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoImage: {
    height: 100,
    width: 100,
    margin: 10
  },
  infoText: {
    color: '#66AAFF',
    fontWeight: '400'
  }
});

const Search = () => {

  const [ results, setResults ] = useState([]);
  const [ searchState , setSearchState ] = useState(null);

  const setSearchResults = async (q) => {
    setSearchState ("loading")
    try {
        const response = await getSearchResults (q);
        setResults(response);
        setSearchState("success");
    }
    catch (error) {
        setSearchState ("error");
    }
  };

  useEffect (() => {

  }, [searchState, results])

  const renderItem = ({ item }) => (
    <SearchItem item={item}/>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput setSearchResults={setSearchResults}/>
      </View>
      <View style={styles.resultsContainer}>
        {
          searchState
          ? (
            searchState === "error"
            ? (
              <View style={styles.errorContainer}>
                <Image
                  style={styles.infoImage}
                  source={require('../res/images/no_connection.png')}
                  />
                <Text style={styles.infoText}>Error fetching Search Results</Text>
              </View>
            )
            : (
              searchState === "success"
              ? (
                <FlatList
                  data={results}
                  renderItem={renderItem}
                  keyExtractor={item => item.videoId}
                />
              )
              : (
                <ActivityIndicator size="large" color="#66AAFF"/>
              )
            )
          )
          : (
            <View style={styles.errorContainer}>
              <Image
                style={styles.infoImage}
                source={require('../res/images/search.png')}
                />
              <Text style={styles.infoText}>Search Songs</Text>
            </View>
          )
        }
      </View>
    </View>
  );
}


export default Search;
