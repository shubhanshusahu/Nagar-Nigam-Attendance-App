import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AwesomeButton from "react-native-really-awesome-button";

export default function StartPage() {
  const navigation = useNavigation();
  return (
    // <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        // colors={['rgba(122, 51, 255,0.3)', 'transparent']}
        colors={['orange', '#fff', 'green']}
        style={styles.container}
      >
        <Image style={{width:"80%",height:140}} source={require('../../assets/start.png')}/>

        <View style={{justifyContent:'flex-end',marginTop:60}}>

      
     
       <AwesomeButtonRick  style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2}  backgroundColor="#fff" type="primary"  onPress={()=>{navigation.navigate("Empolyee Login")}} >
      Empolyee Login
    </AwesomeButtonRick>
       
   
  
   
      <AwesomeButtonRick style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2} backgroundColor="#fff" type="primary"  onPress={()=>{navigation.navigate("Public Login")}} >
      Public Login
    </AwesomeButtonRick>

   
   </View>
   </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
  
   width:150,
    marginVertical:5,
   
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#B3AFB4',
    
  },
});