import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import renderIf from 'render-if';
import MapView ,{Marker,Circle } from 'react-native-maps';
import { useRoute ,useNavigation} from '@react-navigation/native';


export default function Locate() {
    
const route=useRoute();


     const [location, setLocation] = useState({coords:{ latitude:23.152198,
        longitude:79.944952,
       latitudeDelta: 0.0022,
       longitudeDelta: 0.0021}});
     const [errorMsg, setErrorMsg] = useState();
     const [flag, setFlag] = useState(true)
    //  useEffect(() => {
    //    (async () => {
    //      let { status } = await Location.requestPermissionsAsync();
    //      if (status !== 'granted') {
    //        setErrorMsg('Permission to access location was denied');
    //        return;
    //      }
   
    //     setLocation(await Location.getCurrentPositionAsync({}));
    //      setFlag(false)
    
    //     if(location!=null)
    //    {  
          
         
        
    //       setFlag(true);
    //       flag2=true;
    //    }
    //    else
    //    {
    //      setFlag(false)
    //    }
    //    })();
    //  }, []);
   
     
   
   
     return (
       <>
       
       {renderIf(flag)(<MapView style={{flex:1,alignItems:'center', justifyContent:'flex-end'}}
      initialRegion={location.coords}
      onPress={(region)=>{alert(region.latitude)}}>
      <Circle center={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
  
      }} radius={50}  
      strokeColor="green"
      strokeWidth={5}
      />
 <Marker coordinate={location.coords}/>
<Circle center={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
     
      }} radius={50}  
      strokeColor="green"
      strokeWidth={5}
      />
    
   
       <Text>hello</Text>

         </MapView>)}
  
      </>
     );
   }  
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
   });
   