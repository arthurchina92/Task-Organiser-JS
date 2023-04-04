import {View,TextInput} from 'react-native';
import React from 'react';
import { Styles } from './SearchBarStyles';

export default function SearchBar() {
  return (
    <View>
      <TextInput placeholder="Search a task" style={Styles.searchBar}/>
    </View>
  );
}
export {SearchBar};
