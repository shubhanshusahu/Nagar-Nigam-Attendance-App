import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
export default function PublicLogin() {

  const navigation = useNavigation();
  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.3)', 'transparent']}
        style={styles.container}
      >
           <View style={{flexDirection:'row' ,alignItems:'center'}}>
         <View style={{flexDirection:'column',marginRight:10}}>
        <TextInput
        placeholder="Mobile Number" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        style={styles.txt}
       
      />
       <TextInput
        placeholder="Password" textAlign='left'
        
        placeholderTextColor='#3AB432'
       style={styles.txt}
       
      />
    
      </View>
      <TouchableOpacity   onPress={()=>{navigation.navigate("Public Home Page")}}  >
    
     
   
           
    <AntDesign name="login" size={45}  color='#39E42D' />


</TouchableOpacity>

      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("Sign-Up")}} >
         <Text style={styles.forg}>Dont have an Account ?, Create One..</Text> 
         </TouchableOpacity>
      <Image style={{width:"100%",height:170}} source={require('../../assets/city2.png')}/>
      
   </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
       padding:2,
       marginVertical:4,
       borderWidth:1,
       borderRadius:13,
       borderColor:'#39E42D',
       paddingLeft:5,
     
  },
  forg:{
      
    height: 30,
     
      fontSize:15,
     color:"#39E42D",
       margin:0,
      textAlign:'center',
      textDecorationLine:'underline',
},
});