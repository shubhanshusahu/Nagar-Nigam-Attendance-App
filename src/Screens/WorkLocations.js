import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import renderIf from 'render-if';
import MapView ,{Marker,Circle } from 'react-native-maps';
import { useRoute ,useNavigation} from '@react-navigation/native';
import { MaterialIcons,AntDesign  } from '@expo/vector-icons';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';


export default function Locate() {
    
const route=useRoute();


     const [location, setLocation] = useState({coords:{ latitude:23.152198,
        longitude:79.944952,
       latitudeDelta: 0.0022,
       longitudeDelta: 0.0021}});
     const [errorMsg, setErrorMsg] = useState();
     const [locationName, setlocationName] = useState("sadar");
     const [flag, setFlag] = useState(true)
     const changelocation=()=>{
         if(location.coords.latitude==23.152198)
         {
             setlocationName("Adhartal")
        setLocation({coords:{ latitude:23.202209,
            longitude:79.944955,
           latitudeDelta: 0.0022,
           longitudeDelta: 0.0021}})
        }
        else{
            setlocationName("sadar")
            setLocation({coords:{ latitude:23.152198,
                longitude:79.944955,
               latitudeDelta: 0.0022,
               longitudeDelta: 0.0021}})   
        }
     }
     return (
       <>
       
       {renderIf(flag)(<MapView style={{flex:0.87,alignItems:'center', justifyContent:'flex-end'}}
      initialRegion={location.coords}
      region={location.coords}
      onPress={(region)=>{alert(region.coords)}}>
      <Circle center={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
  
      }} radius={50}  
      strokeColor="green"
      strokeWidth={5}
      />
 <Marker coordinate={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
      }}></Marker>
<Circle center={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
     
      }} radius={50}  
      strokeColor="green"
      strokeWidth={5}
      />
    
   
       

         </MapView>)}
         <Text style={{backgroundColor:"#fff",color:"#7A33FF"}}> Location: {locationName}</Text>
         <View style={styles.container}>
         <AwesomeButtonRick  style={styles.button} textColor="#fff" width={50} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="primary" 
    onPress={()=>{changelocation()}}>
    <MaterialIcons name="add-location" size={30} color="#fff" />
    </AwesomeButtonRick>
         <AwesomeButtonRick  style={styles.button} textColor="#fff" width={50} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="primary" 
    onPress={()=>{changelocation()}}>
    <AntDesign name="leftcircleo" size={30} color="#fff" />
    </AwesomeButtonRick>
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={50} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="primary" 
    onPress={()=>{changelocation()}}>
     <AntDesign name="rightcircleo" size={30} color="#fff" />
    </AwesomeButtonRick>
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={50} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="primary" 
    onPress={()=>{changelocation()}}>
    <MaterialIcons name="edit-location" size={30} color="#fff" />
    </AwesomeButtonRick>
      </View>
      </>
     );
   }  
   
   const styles = StyleSheet.create({
     container: {
         flex:0.125,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row'
     },
     button: {
       
     marginHorizontal:10,
        width:50
      },
   });