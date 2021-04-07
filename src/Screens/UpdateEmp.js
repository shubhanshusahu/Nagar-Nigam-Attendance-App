import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image,Picker, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation ,useRoute} from '@react-navigation/native';
import { useState,useEffect } from 'react';
import { AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import * as ImagePicker from 'expo-image-picker';
export default function UpdateEmp() {
    const route=useRoute();
    
  const [empid, setempid] = useState(route.params.empid)
  const [name, setName] = useState(route.params.Name)
 const [imag, setimag] = useState(null)
  const [mno, setMno] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setrePass] = useState("")
  const [selectedValue, setSelectedValue] = useState("shivanshu");
  let dataSource=route.params.dataSource;
  let dataSource2=route.params.dataSource;
  const clear=()=> 
  {
    setName("");

-    setMno("");
    setPass("");
    setrePass("");

  }
  function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}
useEffect(() => {
  
  (async () => {
  //  removeElement(dataSource, route.params.Name,route.params.empid);
  //  dataSource=dataSource2;
  //  dataSource.splice(dataSource.findIndex(e => e.empid === empid),1);
  //   alert(JSON.stringify(dataSource))
  fetch("http://d9333d7863ae.ngrok.io/getOneEmp",{

    method:"POST",
    headers:{
     
      'Content-Type':'application/json'
    },  
      body:JSON.stringify({
      
      'EmployeeId': route.params.empid,
     
  })
    
  })
  .then((data)=>data.json())
  .then((data)=>{
    setimag(data.Pfp)
   setMno(data.Mobile)
   setPass(data.Password)
   setrePass(data.Password)
   setSelectedValue(data.Under)
  })
  alert(JSON.stringify(dataSource))
  })();
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();
  // dataSource2.remove(array, function() { return {name,empid};});
   
}, []);


const openCam = async () => {
  let result1 = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // allowsEditing: true,
    // aspect: [8,16],
   
    quality: 0.2,
     base64 :true
  });
  if (!result1.cancelled) {

    setimag(result1.base64)
    
      }
     
}
const UpdateEmp=()=>{

  //alert("name is "+name+ ",password is "+password+" Employee id is "+empid+" role is "+role)

  fetch("http://d9333d7863ae.ngrok.io/UpdateEmp",{



    method:"POST",
    headers:{
     
      'Content-Type':'application/json'
    },  
      body:JSON.stringify({
     
      'EmployeeId': empid,
      'Name': name,  
      'Password': pass,
      'Mobile':mno,
      'Under':selectedValue,
      'Pfp':imag
      
  })
    
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.success==true)
      alert("Employee "+name+" is Updated!");
    else
      alert("Employee "+name+" not found!");
   
  
  })    
}

  const validate=()=>{
    var r=mno;
    //var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var letters=/^[A-Z a-z]+$/;
    if ((!empid=="") && (empid.length>2) && !isNaN(empid))
    {
    if ((name.match(letters)) && (!name=="") && (name.length>2))
    {
     
     
      if ((mno.length==10) && (!mno=="") && !isNaN(mno)){
        if((!pass=="") &&(pass.length>3)){
          if( (!repass=="")) {
          if((pass==repass) && (!repass=="")) {
            if(selectedValue==empid)
            {
              alert("Change supervisor!")
            }
else{   
           UpdateEmp();
}
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

  
 } else{
  alert("Name is not in correct format")
  setName("");
}
}
else{
      alert("Enter valid Employee ID") 
    }

    
}

  const navigation = useNavigation();
  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.4)', 'transparent']}
        style={styles.container}
      >
      <TouchableOpacity style={{borderRadius:30}} onPress={()=>{openCam()}}>
      <ImageBackground
        style={ {
         padding:5,
         height:300,width:300,alignItems:'center',justifyContent:'flex-end'}}
         resizeMode="contain"
        source={{
          uri:("data:image/jpeg;base64,"+imag)
        }}
      ><MaterialCommunityIcons name="image-edit-outline" size={30} color="#39E42D" /></ImageBackground>
      </TouchableOpacity>
           <View style={{flexDirection:'row' ,alignItems:'center'}}>
         <View style={{flexDirection:'column',marginRight:10}}>
         <TextInput
        placeholder="Employee Id" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        value={empid.toString()}
        onChangeText={text => setempid(text)}
        style={styles.txt}
       
      />
         <TextInput
        placeholder="Name" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        value={name}
        onChangeText={text => setName(text)}
        style={styles.txt}
       
      />
       {/* <TextInput
        placeholder="Date-Of-Birth" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        onChangeText={text => setDob(text)} 
        value={dob.toString()}
        style={styles.txt}
       
      /> */}
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
        <Text style={{fontSize:18,color:'#3AB432'}}>Under Whom?</Text>
      <View style={{
 alignSelf:"center",
  borderWidth: 2,
  borderColor:'#3AB432',
  borderRadius: 20,
  marginVertical:5,
  flexDirection:'row',
  alignItems:'center',
  paddingHorizontal:5
}}>


<Picker 
               
               style={{ color:'#fff', height: 35, width: 165 ,borderRadius:25}}
  
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue) }>
                
                  {dataSource.map((item, index) => {
                  return (<Picker.Item label={item.Name} value={item.empid} key={index}/>)   })}
                </Picker> 


    
    </View>
    
      </View>
      <TouchableOpacity  onPress={()=>{validate()}}>
    
     
   
           
    <AntDesign name="login" size={45}  color='#39E42D' />


</TouchableOpacity>

      </View>
      <AwesomeButtonRick  style={styles.button} textColor="#fff" height={40} width={290} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="primary" 
    onPress={()=>{navigation.navigate("Checking Attendance")}} >
      <Text style={{fontSize:15,color:'#FFF'}}>Check {name}'s Attendance</Text>
    </AwesomeButtonRick>
      <AwesomeButtonRick  style={styles.button} textColor="#fff" height={40} width={290} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="primary" 
    onPress={()=>{navigation.navigate("Mark Attendance",{'empid':route.params.empid,'empName':route.params.empName})}} >
      <Text style={{fontSize:15,color:'#FFF'}}>Mark Attendance</Text>
    </AwesomeButtonRick>
      <AwesomeButtonRick  style={styles.button} textColor="#fff" height={40} width={290} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="primary" 
    onPress={()=>{navigation.navigate("Work Locations")}} >
      <Text style={{fontSize:15,color:'#FFF'}}>Add/Edit Work Locations</Text>
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
    
    height:40,
   
    marginVertical:2,
    width:290
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