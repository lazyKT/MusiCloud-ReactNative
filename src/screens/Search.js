import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator,
  Modal
}
from 'react-native';

import SearchInput from '../components/SearchInput';
import SearchItem from '../components/SearchItem';
import Details from '../components/Details'
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
  const [ selectedResult, setSelectedResult ] = useState(null);
  const [ showModal, setShowModal ] = useState(false);

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

  const toggleModalVisibe = (videoId) => {
    setSelectedResult (results.find (r => r.videoId === videoId));
    setShowModal (!showModal);
  }

  useEffect (() => {

  }, [searchState, results])

  const renderItem = ({ item }) => (
    <SearchItem item={item} onPress={id => toggleModalVisibe(id)}/>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="sldie"
        transparent={false}
        visible={showModal}
        >
        <Details
          infoType={"search"}
          data={selectedResult}
          hideModal={toggleModalVisibe}/>
      </Modal>

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
