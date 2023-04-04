import React from 'react';
import {Text, SafeAreaView, ScrollView, View, FlatList} from 'react-native';
import {Counter} from './Counter/Counter';
import {SearchBar} from './SearchBar/SearchBar';
import tasks from '../data/tasks.json';
import {TaskList} from './TaskList/TaskList';
import {Styles} from './AppStyles';

function App() {
  return (
    <>
    <SafeAreaView style={Styles.areaView}>
      <Counter/>
      <SearchBar/>
      <FlatList
      data={tasks}
      renderItem={({item, index}) => (
        <TaskList task={item} key={index} />
      )}
    />
      <Text>Hola</Text>
      <Text>Como estas</Text>
    </SafeAreaView>
    </>
  );
}
export default App;
