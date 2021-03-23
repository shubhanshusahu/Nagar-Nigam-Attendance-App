import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import renderIf from 'render-if';
import MapView ,{Marker,Circle } from 'react-native-maps';
import { useRoute ,useNavigation} from '@react-navigation/native';

export default function Locate() {
    
const route=useRoute();


     const [location, setLocation] = useState({coords:{latitude: route.params.latitude,
       longitude: route.params.longitude,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421}});
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
       
       {renderIf(flag)(<MapView style={{flex:0.5,alignItems:'center', justifyContent:'flex-end'}}
      initialRegion={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0022,
         longitudeDelta: 0.0021,
      }}
      region={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0022,
         longitudeDelta: 0.0021,
      }}
      onPress={(region)=>{alert(region.latitude)}}>
      <Circle center={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
      // latitudeDelta: 0.0922,
      //    longitudeDelta: 0.0421,
      }} radius={50}  
      strokeColor="green"
      strokeWidth={5}
      />

      <Marker coordinate={{latitude:location.coords.latitude,
      longitude: location.coords.longitude,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,}}>

<Image
        style={{width:30,borderRadius:50,height:30}}
        source={{
          uri:route.params.imag
        }}
      />
         </Marker>
         <Text style={{color:"green", fontSize:18}}>Inside Work Location!</Text>
         </MapView>)}
   <Image
        style={{flex:0.5}}
        source={{
          uri:route.params.imag
        }}
      />
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
   