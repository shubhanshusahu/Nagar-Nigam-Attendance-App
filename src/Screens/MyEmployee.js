import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default function MyEmployee() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.6)', 'transparent']}
        style={styles.background}
      />

   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
   onPress={()=>{navigation.navigate("Add-New-Employee")}} >
      Add New Employee
    </AwesomeButtonRick>
      
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
    onPress={()=>{navigation.navigate("Checking Attendance")}} >
      Checking Attendance
    </AwesomeButtonRick>
    
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
    onPress={()=>{navigation.navigate("Mark Attendance")}} >
      Marking Attendance
    </AwesomeButtonRick>
  
   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" onPress={()=>{navigation.navigate("Employee-Detail")}}  >
      Employee-Details
    </AwesomeButtonRick>
     
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary"  >
      Add Work Location
    </AwesomeButtonRick>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical:5,
    width:200
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#B3AFB4',
    
  },
  lbl:{
    color:"#fff",
    fontSize:18,
    flexDirection:"row",
    marginBottom:10,
   

  },
  txt: {
    fontSize:18,
     color:"#fff",
        width:200,
       padding:5,
       marginBottom:20,
    
       borderWidth:1,
       borderRadius:13,
       borderColor:'#7A33FF',
     
  },
});