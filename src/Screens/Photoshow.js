import * as React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation,useRoute } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export default function PhotoShow() {
 
  const navigation = useNavigation();
const route= useRoute();

  const [image, setImage] = useState(route.params.photo);
  
  const submit=()=>{
    alert("Attendance Mark Sucessfully");
    navigation.navigate("My-Attendance");
  }
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    

  const now = new Date(),
     date = now.getDate(); //Current Date
     month = now.getMonth() + 1; //Current Month
     year = now.getFullYear(); //Current Year
     hours = now.getHours(); //Current Hours
     min = now.getMinutes(); //Current Minutes
     sec = now.getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.4)', 'transparent']}
        style={styles.container}
      >
         
          
           
      
         <Text style={styles.textStyle}>
            Current Date Time
          </Text>
          <Text style={styles.textStyle}>
            {currentDate}
          </Text>
       
      
     


     
      {image && <Image source={{ uri: image }} style={{ width:350,height:500}} />}
  



      <AwesomeButtonRick  style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2}  backgroundColor="#fff" type="primary"  onPress={()=>{navigation.navigate("Mark Attendance")}} >
     Retake photo
    </AwesomeButtonRick>
    <AwesomeButtonRick  style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2}  backgroundColor="#fff" type="primary"  onPress={()=>submit()} >
     mark attendance
    </AwesomeButtonRick>
    

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
    
    margin:0,
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
  
  },
  textStyle: {
 
    fontSize: 18,
    color: '#fff',
    paddingBottom:5,
    
  },
});