import * as React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation,useRoute } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import renderIf from 'render-if';
export default function PhotoShow() {
 
  const navigation = useNavigation();
const route= useRoute();
let Name=route.params.Name;
let empid=route.params.empid
let location=route.params.location;
let latitude=location.coords.latitude;
let longitude=location.coords.longitude;
  const [image, setImage] = useState('data:image/jpg;base64,'+route.params.photobase64);
  const [currentDate, setCurrentDate] = useState('');
  const [flag2,setFlag2]=useState(false);
  const submit=()=>{
    fetch("http://8f473b505af7.ngrok.io/markattendance", {
      method: "POST",
      headers:{
     
        'Content-Type': 'application/json'
      },
  
      body:JSON.stringify({
        'Name':Name,
        'EmployeeId':empid,
        'Photo':image,
        'Latitude':latitude,
        'Longitude':longitude,
        'Date':currentDate,
      })
  
    })
      .then((res) => res.json())
      .then(res => {
        alert("mark attendnce sucessfully")
        navigation.navigate("My-Attendance")

      })
      .catch(err => {
        alert("mark attendance sucessfully")
        navigation.navigate("Home Page",{'empid':route.params.empid})
      });
       
    
  }
  fetch("http://worldtimeapi.org/api/ip",{
  
    method:"GET",
    headers:{
     
      'Content-Type':'application/json'
    },  
     
    
  })
  .then(res=>res.json())
  .then((res)=>{
   // setCurrentDate("Date: "+res.datetime.slice(0,10)+" Time: "+res.datetime.slice(11,19))
  const year=res.datetime.slice(0,4)
  const month=res.datetime.slice(5,7)
  const day=res.datetime.slice(8,10)
  const hours=res.datetime.slice(11,13)
  const min=res.datetime.slice(14,16)
  const sec=res.datetime.slice(17,19)
  setCurrentDate(
      day + '-' + month + '-' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
    setFlag2(true)
  })

//   useEffect(() => {
    

  

//     (async () => {
 
// })();
  //}, []);
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
       
      
     


     
      {image && <Image source={{ uri: image}} resizeMode='contain' style={{ flex:1,width:333,height:333}} />}
  

<View flexDirection='row'>


      <AwesomeButtonRick  style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2}  backgroundColor="#fff" type="primary"  onPress={()=>{navigation.navigate("Mark Attendance")}} >
     Retake photo
    </AwesomeButtonRick>
    <AwesomeButtonRick  style={styles.button} width={150} borderColor="#3DFDF4" borderWidth={2}  backgroundColor="#fff" type="primary"  onPress={()=>submit()} >
     mark attendance
    </AwesomeButtonRick>
    

    </View>
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
    margin:15,
    
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