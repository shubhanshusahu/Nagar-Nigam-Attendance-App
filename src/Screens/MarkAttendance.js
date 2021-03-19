import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

let camera=Camera;
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo1, setphoto1]=useState(null);
  const [capturedImage, setCapturedImage] = useState(false)
  const [flashMode, setFlashMode] = useState('off')


  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }

  }

  snap = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      alert("captured"+JSON.stringify(photo))
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={{ flex: 1 ,flexDirection:'column'}}   flashMode={flashMode} type={type}  ref={(r) => {
    camera = r}} >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'column',
          }}>
              <View style={{height:"80%"}}>
                  
              </View>
              <View style={{height:"20%",alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
 
                  
          <TouchableOpacity
          style={styles.back}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
              {/* <View style={{width:300,alignItems:'center',backfaceVisibility:'visible', backgroundColor:'black'}}> */}
            

              <MaterialIcons name="loop" size={40} color="#fff" alignItems='center' />
            
       </TouchableOpacity>
        
<TouchableOpacity
                      onPress={()=>snap()}
                      style={{
                         justifyContent:'center',
                       marginHorizontal:12,
                        width: 70,
                        height: 70,
                        bottom: 0,
                     
                        borderRadius: 50,
                        backgroundColor: '#fff'
                      }}
                    />
       <TouchableOpacity style={styles.flash1} onPress={__handleFlashMode} >
              <Text
             
                style={{
                    backgroundColor: flashMode === 'off' ? '#fff' : 'blue', 
                fontSize: 30,
                padding:5,
                borderRadius:50,
               paddingHorizontal:7
                }}
            >⚡️</Text>
            </TouchableOpacity>
         </View>
        
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
        flex: 1,
      backgroundColor: "#192531",
      alignItems: 'stretch',
     width:'100%'
    },
    loop:{
      
       
     
                },
    flash1:{
        padding:5,
        borderRadius:50,
        // backgroundColor:'blue',
        marginHorizontal:12,
        // backfaceVisibility:'visible',
          
    },
    back:{
    backgroundColor:'blue',
    alignItems:'flex-end',
    marginHorizontal:12,
    padding:5,
    borderRadius:50,
    }

})
