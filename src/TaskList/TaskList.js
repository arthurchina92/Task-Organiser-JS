import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import { Styles } from './TaskListStyles';

function TaskList({task}) {
  return (
    <View style={Styles.cardContainer}>
      <View style={Styles.card}>
      <Text style={Styles.cardText}>{task.text}</Text>
      </View>
    </View>
  );
}
export {TaskList};
