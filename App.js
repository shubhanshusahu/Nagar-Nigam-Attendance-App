import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import Navigator from './src/Navigtor/Navigator';

 
export default class App extends React.Component {

  
render(){
  return (  
    
    <Navigator/>
  );
}
}
