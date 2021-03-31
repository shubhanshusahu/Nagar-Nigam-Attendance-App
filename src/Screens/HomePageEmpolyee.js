import * as React from 'react';
import { StyleSheet, View,TouchableOpacity,TextInput,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
export default function EmpolyeeHome() {

  const navigation = useNavigation();
  const getLocation =()=>{

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
   if (status !== 'granted') {
        
          setErrorMsg('Permission to access location was denied',{'empid':"self",'empName':"self"});
          
          return;
        }
  if(Location.hasServicesEnabledAsync({}))
     {
      navigation.navigate("Mark Attendance");    
    }
  else
  {
  getLocation();
  }
    
    })();
  }
  return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.6)', 'transparent']}
        style={styles.background}
      />

  
      
<AwesomeButtonRick style={styles.button}   textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF"  type="secondary"  onPress={()=>{navigation.navigate("My Employee")}} >
    MY Employee
    </AwesomeButtonRick>
       

   
      
   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" onPress={()=>{navigation.navigate("My-Attendance")}} >
   My Attendance
    </AwesomeButtonRick>
       

  
   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary"  onPress={()=>{getLocation()}} >
   Mark Attendance
    </AwesomeButtonRick>

   
       
      
   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary"  >
   Viewing Complains
    </AwesomeButtonRick>

      
      <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary"  >
      Viewing Feedback
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
   
    alignItems: 'center',
   
    marginVertical:5,
    
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