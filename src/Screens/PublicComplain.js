import * as React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import * as ImagePicker from 'expo-image-picker';

export default function PublicComplain() {
 
  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();

   
  }, []);

  const pickImage = async () => {
   

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [8,16],
      
      quality: 1,
      base64 :true
    });
     

    if (!result.cancelled) {

      setImage(result.base64)
      
        }
       
  }
  
  const openCam = async () => {
    let result1 = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [8,16],
     
      quality: 1,
       base64 :true
    });
    if (!result1.cancelled) {

      setImage(result1.base64)
      
        }
       
  }
  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.4)', 'transparent']}
        style={styles.container}
      >
           <ScrollView style={{flexDirection:'column'}}>  
            <View style={{flexDirection:'column',marginRight:10,alignItems:'center',justifyContent:'center'}}>
           
      
            <TextInput
            style={styles.postInput}
            
            numberOfLines={2}
            placeholder="Address.."
            placeholderTextColor="#3DFDF4"
            underlineColorAndroid='transparent'
            require={true}
/>
         <TextInput
            style={styles.postInput}
            multiline={true}
            numberOfLines={3}
            placeholder="TYPE HERE ......"
            placeholderTextColor="#3DFDF4"
            underlineColorAndroid='transparent'
            require={true}
/>
      
      <View style={{flexDirection:'row'}}>


      <View style={{ flex: 1, justifyContent: 'center' }}>
      <AwesomeButtonRick  onPress={()=>{openCam()}} style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2} backgroundColor="#fff" type="primary" >
      Click Picture
    </AwesomeButtonRick>
    <AwesomeButtonRick style={styles.button,{width:310,marginBottom:10,marginLeft:7}} width={310} borderColor="#3DFDF4" borderWidth={2} backgroundColor="#fff" type="primary" 
  >
      Submit
    </AwesomeButtonRick>
      {image && <Image source={{uri:("data:image/jpeg;base64,"+image)}}  resizeMode='contain' style={{ width:333,height:333,marginBottom:5}} />}
    </View>
    <AwesomeButtonRick  onPress={()=>{pickImage()}} style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2} backgroundColor="#fff" type="primary" >
      Upload image
    </AwesomeButtonRick>

     
   </View>
           
    
</View>
      </ScrollView>
  
      
   </LinearGradient>
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
    margin:5,
    
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
        width:250,
        height:250,
       padding:2,
     
       borderWidth:1,
       borderRadius:13,
       borderColor:'#39E42D',
       paddingLeft:5,
       alignItems:'flex-start',
       
     
  },
  forg:{
      
    height: 30,
    fontSize:15,
    
    marginBottom:5,
    textAlign:'center',
    textDecorationLine:'underline',
},
postInput: {
  color:"#fff",
  fontSize: 18,
  width:300,
  borderColor:'#42435b',
  borderWidth:1,
  margin:10,
  borderWidth:1,
  borderRadius:35,
  borderColor:'#3DFDF4',
  padding:15,
  
  }
});