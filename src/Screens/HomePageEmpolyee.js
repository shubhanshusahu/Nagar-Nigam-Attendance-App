import * as React from 'react';
import { StyleSheet, View,TouchableOpacity,Image,TextInput,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import * as Location from 'expo-location';
import { useNavigation ,useRoute} from '@react-navigation/native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
export default function EmpolyeeHome() {

  const navigation = useNavigation();
  const route=useRoute();
   
    
  const getLocation =()=>{

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
   if (status !== 'granted') {
        
          setErrorMsg('Permission to access location was denied',{'empid':"self",'empName':"self"});
          
          return;
        }
  if(Location.hasServicesEnabledAsync({}))
     {
      navigation.navigate("Mark Attendance",{'empName':"self"});    
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
      <View style={{height:"20%", width:"90%",flexDirection:'column',alignItems:"flex-end"}} > 
      
      <AwesomeButtonRick style={styles.button1}  textColor="#fff" width={100} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" onPress={()=>navigation.navigate("Empolyee Login")}  >
   Logout
    </AwesomeButtonRick>
      </View>
      <View style={{height:"80%",width:"100%",alignItems:"center"}}>
<TouchableOpacity style={styles.txt}>
<Image
        style={ {backgroundColor:'#2196F3',
         padding:5,
         height:50,width:50,borderRadius:50,marginLeft:1}}
        source={{
          uri:("data:image/jpeg;base64,"+route.params.Pfp)
        }}
      />
  <Text style={{color:"#fff",fontSize:18,marginHorizontal:7}}>{route.params.Name}</Text>
      </TouchableOpacity>
<AwesomeButtonRick style={styles.button}   textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF"  type="secondary" 
 onPress={()=>{navigation.navigate("My Employee",{'Name':route.params.Name,'empid':route.params.empid,'under':route.params.under})}} >
    MY Employee
    </AwesomeButtonRick>
       

   
      
   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
   onPress={()=>{navigation.navigate("My-Attendance")}} >
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
  button1: {
    
    marginTop:35,
   
    
    
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
       
       padding:5,
       marginBottom:20,
       borderWidth:1,
       borderRadius:30,
       textAlign:'center',
       borderColor:'#7A33FF',
     alignItems:'center',
     justifyContent:'center',
     flexDirection:'row',
  },
});