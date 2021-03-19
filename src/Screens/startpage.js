import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function StartPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(122, 51, 255,0.3)', 'transparent']}
        style={styles.background}
      />
       <TouchableOpacity  onPress={()=>{navigation.navigate("Empolyee Login")}}>
      <LinearGradient
     
        // Button Linear Gradient
        colors={['#7A33FF', '#000', '#192f6a']}
        style={styles.button}>
           
        <Text style={styles.text}>Employee Login</Text>
       
      </LinearGradient>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>{navigation.navigate("Public Login")}}>
      <LinearGradient
     
     // Button Linear Gradient
     colors={['#7A33FF', '#000', '#192f6a']}
     style={styles.button}>
       
     <Text style={styles.text}>Public Login</Text>
   
   </LinearGradient>
   </TouchableOpacity>
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
});