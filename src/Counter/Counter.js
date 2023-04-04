import React from 'react';
import {View, Text} from 'react-native';
import { Styles } from './CounterStyles';

function Counter() {
  return (
    <View>
      <Text style={Styles.counterTitle}>Task Organizer</Text>
      <Text style={Styles.taskCounter}>You have completed "" of "" tasks.</Text>
    </View>
  );
}
export {Counter};
