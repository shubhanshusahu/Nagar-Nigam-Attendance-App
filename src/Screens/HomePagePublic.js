import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation ,useRoute } from '@react-navigation/native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
export default function PublicHome() {
 const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      
         <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 265,0.8)', 'transparent']}
        style={styles.background}
        
     />
     <View style={{height:"30%",alignItems:'flex-start',flexDirection:'row'}}>
     <Text  style={styles.txt}> Welcome {route.params.Name} </Text>
     <AwesomeButtonRick  style={styles.button1} textColor="#fff" width={80} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" onPress={()=>navigation.navigate("Public Login")}  >
      Logout
    </AwesomeButtonRick>
       </View> 

     <View style={{height:"70%",alignItems:'center'}}> 
 
  <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary"  onPress={()=>{navigation.navigate("Complain")}} >
     Complain 
    </AwesomeButtonRick>
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" onPress={()=>{navigation.navigate("feedback")}}  >
     Feedback
    </AwesomeButtonRick>
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary"  >
     Complain Status Check
    </AwesomeButtonRick>
   </View>
 
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
  button1: {
    marginTop:7,
  
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
    fontSize:22,
     color:"#FFF",
        width:"70%",
       marginRight:15,
       marginTop:10,
       height:50,
       textAlign:"left",
       
      
       borderColor:'#7A33FF',
     
  },
});