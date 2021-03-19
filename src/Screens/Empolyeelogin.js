import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image,KeyboardAvoidingView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function EmpolyeeLogin() {
    const navigation = useNavigation();

  return (
   
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.2)', 'transparent']}
        style={styles.container}
      >
        <View style={{flexDirection:'row' ,alignItems:'center'}}>
         <View style={{flexDirection:'column',marginRight:10}}>
        <TextInput
        placeholder="User Id" 
        placeholderTextColor='#B3AFB4'
        textAlign='center'
        style={styles.txt}
       
      />
       <TextInput
        placeholder="User Password" textAlign='center'
        placeholderTextColor='#B3AFB4'
       style={styles.txt}
       
      />
      </View>
       <TouchableOpacity  onPress={()=>{navigation.navigate("Home Page")}}>
    
     
   
           
           <AntDesign name="login" size={45}  color='#7A33FF' />
       
     
      </TouchableOpacity>
      </View>
      <Image style={{width:"100%",height:170}} source={require('../../assets/city.png')}/>
    
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
       padding:5,
       marginVertical:4,
       borderWidth:1,
       borderRadius:13,
       borderColor:'#7A33FF',
     
  },
});