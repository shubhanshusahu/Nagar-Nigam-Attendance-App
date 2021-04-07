import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image,KeyboardAvoidingView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function EmpolyeeLogin() {
    const navigation = useNavigation();

    const [empid,setEmpid] = useState("")
    const [password,setPass] = useState("")

    const logincheck=()=>{

      fetch("http://8f473b505af7.ngrok.io/login",{

  
        method:"POST",
        headers:{
         
          'Content-Type':'application/json'
        },  
          body:JSON.stringify({
          
          'Password': password,
          'EmployeeId': empid,
         })
        
      })
      .then(res=>res.json())
      .then((res)=>{
        
        if( res.success === true)
        {
          
          navigation.navigate("Home Page",{'Name':res.Name,'empid':res.empid,'under':res.Under,'barfromstock':null,'Pfp':res.Pfp})
          
        }
        else{
          alert(res.message)
      
        } 
          
      })
    }
  return (
   
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.6)', 'transparent']}
        style={styles.container}
      >
        <View style={{borderRadius:25,borderColor:'#00ABF0',borderWidth:2,alignItems:'center',padding:7,marginBottom:2,paddingHorizontal:13}}>
        <Image style={{width:220,height:270,
        }} source={require('../../assets/admin.png')}/>
        <View style={{flexDirection:'row' ,alignItems:'center'}}>
         <View style={{flexDirection:'column',marginRight:10}}>
        <TextInput
        placeholder="User Id" 
        placeholderTextColor='#01DAAC'
        textAlign='left'
        style={styles.txt} value={empid} onChangeText={text=>setEmpid(text)}
       
      />
       <TextInput
        placeholder="User Password" textAlign='left'
        placeholderTextColor='#01DAAC'
       style={styles.txt} value={password} onChangeText={text=>setPass(text)}
       secureTextEntry={true}
      />
      </View>
       <TouchableOpacity  onPress={()=>{logincheck()}}>
    
     
   
           
           <AntDesign name="login" size={45}  color='#00ABF0' />
       
     
      </TouchableOpacity>
      </View>
      </View>
      <Image style={{width:"100%",height:170}} source={require('../../assets/city.png')}/>
   
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
       padding:5,
       marginVertical:4,
       borderWidth:1,
       borderRadius:13,
       borderColor:"#02CAC6",
     
  },
});