import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';
export default function PublicSignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [mno, setMno] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setrePass] = useState("")
  const clear=()=> 
  {
    setName("");
    setDob("");
    setMno("");
    setPass("");
    setrePass("");

  }
  const validate=()=>{
    var r=mno;
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var letters=/^[A-Z a-z]+$/;
    if ((name.match(letters)) && (!name=="") && (name.length>2))
    {
      if ((dob.match(dateformat)) && (!dob=="")){
        
     
      if ((mno.length==10) && (!mno=="") && !isNaN(mno)){
        if((!pass=="") &&(pass.length>3)){
          if( (!repass=="")) {
          if((pass==repass) && (!repass=="")) {
            
            submit_data();
          
            
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
   else{
    alert("Enter valid mobile number")
    setMno("");
  }
}else{
  alert("Date is wrong use this format DD/MM/YYYY OR DD-MM-YYYY")
  setDob("");
}
  
 } else{
  alert("Name is not in correct format")
  setName("");
}
    
}
const submit_data=()=> {
   
 
   
  fetch("http://3be020024ec5.ngrok.io/signup-data", {
    method: "POST",
    headers:{
   
      'Content-Type': 'application/json'
    },

    body:JSON.stringify({
      'Name': name,
      'Dateofbirth':dob,
      'MobileNumber': mno,
      'Password': pass
    })

  })
    .then(res => res.json())

    .then((data) => {
      
      if (data.success) {
        alert("mobile number already exist")
        setMno("")
      }
      else{
        alert("Registered! Sucessfully ")
        navigation.navigate("Public Login");
    
      }  
    })
    .catch(err => {
      Alert.alert('Err:', err.message);
    });
     
}



 
  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.4)', 'transparent']}
        style={styles.container}
      >
        <Image style={{width:180,height:130,marginBottom:10}} source={require('../../assets/sign-up.png')}/>
           <View style={{flexDirection:'row' ,alignItems:'center'}}>
         <View style={{flexDirection:'column',marginRight:10}}>
         <TextInput
        placeholder="Name" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        value={name}  
        onChangeText={text => setName(text)}
        style={styles.txt}
       
      />
       <TextInput
        placeholder="Date-Of-Birth" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        onChangeText={text => setDob(text)} 
        value={dob}
        style={styles.txt}
       
      />
        <TextInput
        placeholder="Mobile Number" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        value={mno}
        onChangeText={text => setMno(text)}
        style={styles.txt}
       
      />
       <TextInput
        placeholder="Password" textAlign='left'
        value={pass}
        onChangeText={text => setPass(text)}
        placeholderTextColor='#3AB432'
       style={styles.txt}
       
      />
     <TextInput
        placeholder="Re-Enter Password" 
        placeholderTextColor='#3AB432'
        onChangeText={text =>setrePass(text)}
        value={repass}
        textAlign='left'
        style={styles.txt}
       
      />
      </View>
      <View flexDirection='column'> 
      <TouchableOpacity  style={styles.lbl} onPress={()=>{validate()}}>
    
     
   
           
    <AntDesign name="login" size={45}  color='#39E42D' />


</TouchableOpacity>
<TouchableOpacity   style={styles.lbl} onPress={()=>{clear()}}>
    
     
   
  <Feather name="delete" size={45}  color='#39E42D'  />       
   


</TouchableOpacity>
</View>
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
    marginVertical:5,
    width:200
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#B3AFB4',
    
  },
  lbl:{
   
    
   
    marginVertical:5,
   

  },
  txt: {
    fontSize:18,
     color:"#fff",
        width:200,
       padding:2,
       marginVertical:4,
       borderWidth:1,
       borderRadius:13,
       borderColor:'#39E42D',
       paddingLeft:5,
       
     
  },
  forg:{
      
    height: 30,
     
      fontSize:15,
     color:"#39E42D",
       margin:0,
      textAlign:'center',
      textDecorationLine:'underline',
},
});