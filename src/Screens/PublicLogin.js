import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
export default function PublicLogin() {
  const [mno, setMob] = useState("")
  const [pass, setPass] = useState("")
  const navigation = useNavigation();
  const login_data=()=> {
  
      fetch("http://7a51c00538ad.ngrok.io/sign-in", {
        method: "POST",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
  
        body:JSON.stringify({
           
          'MobileNumber': mno,
          'Password': pass
        })
  
      }).then((res) => res.json())
        .then((res)=>{
          if(res.success == true){
            
            navigation.navigate("Public Home Page",{'Name':res.Name,'phone':res.MobileNumber});
            

           
          }
          else{
            alert(res.message)
            
           
          }
   
        });
      }



      const validation=()=>
      {
       if ((!mno=="") && (!pass=="")){
         login_data()
       }else{
         alert("Enter Mobile Number and Password")
       }
      }
   






  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.3)', 'transparent']}
        style={styles.container}
      >
        <View style={{borderRadius:25,borderColor:'#00ABF0',borderWidth:2,alignItems:'center',padding:7,marginBottom:6,paddingHorizontal:13}}>

        <Image style={{width:200,height:150}} source={require('../../assets/login.png')}/>

           <View style={{flexDirection:'row' ,alignItems:'center'}}>
         <View style={{flexDirection:'column',marginRight:10}}>
        <TextInput
        placeholder="Mobile Number" 
        placeholderTextColor='#00ABF0'
        textAlign='left'
        style={styles.txt}
        value={mno}
        onChangeText={text => setMob(text)}
       
      />
       <TextInput
        placeholder="Password" textAlign='left'
        
        placeholderTextColor='#00ABF0'
       style={styles.txt}
       value={pass}
       onChangeText={text =>setPass(text)}
       
      />
    
      </View>
      <TouchableOpacity   onPress={()=>{validation()}}>
    
     
   
           
    <AntDesign name="login" size={45}  color='#00ABF0' />


</TouchableOpacity>

      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("Sign-Up")}} >
         <Text style={styles.forg}>Dont have an Account ?, Create One..</Text> 
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{navigation.navigate("Forget Password")}} >
         <Text style={styles.forg}>Forget Password</Text> 
         </TouchableOpacity>
         </View>
      <Image style={{width:"100%",height:170}} source={require('../../assets/city2.png')}/>
      
   </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
       marginVertical:4,
       borderWidth:1,
       borderRadius:13,
       borderColor:'#00ABF0',
       paddingLeft:5,
     
  },
  forg:{
      
    height: 30,
     
      fontSize:15,
     color:"#00ABF0",
       margin:0,
      textAlign:'center',
      textDecorationLine:'underline',
},
});