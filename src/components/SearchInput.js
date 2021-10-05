import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create ({
  searchView: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 60
  },
  searchIcon: {
    color: '#66AAFF',
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: 'gainsboro'
  },
  input: {
    flex: 1,
    height: 40,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    color: '#66AAFF',
    backgroundColor: 'gainsboro'
  },
  clear: {
    position: 'absolute',
    right: 5,
    color: '#66AAFF'
  }
});

const SearchInput = ({ setSearchResults }) => {

  const [ query, setQuery ] = useState('');

  const onSubmit = () => {
    setSearchResults(query);
  };

  const clearQuery = () => {
    setQuery ('')
  }

  return (
    <View style={styles.searchView}>
      <Ionicons style={styles.searchIcon} name='search' size={20} color='#111' />
      <TextInput
        value={query}
        style={styles.input}
        placeholder='Search Songs'
        onChangeText={query => setQuery(query)}
        onSubmitEditing={() => onSubmit()}
        />
      <TouchableHighlight
        style={styles.clear}
        onPress={() => clearQuery()}
      >
        <Ionicons
          name='close'
          size={20}
          color='#66AAFF'
          />
      </TouchableHighlight>
    </View>
  );
}


export default SearchInput;
