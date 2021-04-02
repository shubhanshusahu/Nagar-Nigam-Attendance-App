import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { AntDesign } from '@expo/vector-icons';
import renderIf from 'render-if';
export default function Forget() {
    const [flag,setFlag]=useState(true);
    const [flag2,setFlag2]=useState(false);
    const [dob, setDob] = useState("")
  const [mno, setMno] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setrePass] = useState("")

  const navigation = useNavigation();
 
  const login=()=>{
     setFlag(false)
     setFlag2(true)
 }
 
 const login_data=()=> {
  
   
  fetch("https://onlinebillingapi.herokuapp.com/forgotpassword", {
    method: "POST",
    headers:{
   
      'Content-Type': 'application/json'
    },

    body:JSON.stringify({
    
      'MobileNumber': mno,
      'Dateofbirth': dob,
    })

  })
    .then(data => data.json())
    .then(data=>{
      if(data.success){
        setFlag(false)
        setFlag2(true)

      }
      else{
        alert("customer not found")
      }
     
     
    
    });
  }
  const resetpass=()=>{
   

 
      fetch("https://onlinebillingapi.herokuapp.com/passUpdate", {
        method: "POST",
        headers:{
       
          'Content-Type': 'application/json'
        },
  
        body:JSON.stringify({
        
          'MobileNumber': mno,
          'Password':pass
          
        })
  
      })
        .then(data => data.json())
        .then(data=>{
        
         
        
        });

  
}
const validate=()=>{
  if((!pass=="") &&(pass.length>3)){
    if( (!repass=="")) {
    if((pass==repass) && (!repass=="")) {
    resetpass()
    
    alert("password has been changed!")
 }
 else{

  alert(" password doesn't match with re-enter password ")
   setrePass("");
 }
}else{
  alert(" ReEnter Password")
}
}else{
alert("Password  too short")
}
}
  const clear=()=> 
  {
    
    setMob("");
    setPass(""); 
  }
 
  return (
    <View style={styles.container}>
      
         <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.7)', 'transparent']}
        style={styles.background}
     />
       <Image style={{width:200,height:120}} source={require('../../assets/fp1.png')}/>
  
         {renderIf(flag)(
      
         <View style={{flexDirection:'row',alignItems:"center"}}>
         <View style={{flexDirection:'column' ,marginRight:10}}>
         <TextInput
        placeholder="Enter Mobile Number" 
        placeholderTextColor='#3AB432'
        textAlign='left'
     
        style={styles.txt}
       
      />
         <TextInput
        placeholder="Enter Date OF Birth" 
        placeholderTextColor='#3AB432'
        textAlign='left'
       
        style={styles.txt}
       
      /></View>
      <TouchableOpacity  onPress={()=>login_data()}   >
      <AntDesign name="login" size={45}  color='#80C922'/>
      </TouchableOpacity>
      </View>
     
         )}

      {renderIf(flag2)(
         
      <View style={{flexDirection:'row',alignItems:"center"}}>
         <View style={{flexDirection:'column' ,marginRight:10}}>
         <TextInput
        placeholder="New Password" 
        placeholderTextColor='#3AB432'
        textAlign='left'
     
        style={styles.txt}
       
      />
         <TextInput
        placeholder="Re-Enter Password" 
        placeholderTextColor='#3AB432'
        textAlign='left'
       
        style={styles.txt}
       
      /></View>
      <TouchableOpacity  onPress={()=>validate()}   >
      <AntDesign name="login" size={45}  color='#80C922'/>
      </TouchableOpacity>
      </View>
     
         )}
         
          
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
       padding:2,
       marginVertical:7,
       
       borderWidth:1,
       borderRadius:13,
       borderColor:'#39E42D',
       paddingLeft:5,
       
     
  },
});