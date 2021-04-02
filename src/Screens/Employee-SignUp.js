import React from 'react';
import { StyleSheet, Text, FlatList,View,TouchableOpacity,TextInput, Picker,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState ,useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import * as ImagePicker from 'expo-image-picker';
export default function EmployeeSignUp() {
  const [empid, setempid] = useState("")
  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [mno, setMno] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setrePass] = useState("")
  const [selectedValue, setSelectedValue] = useState("java");
  let dataSource=[{
    Name:"shivanshu",
    Empid:"12334"
  },
{
  Name:"danikrishu",
  Empid:"88888"
}]
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
    if ((!empid=="") && (empid.length>2) && !isNaN(empid))
    {
    if ((name.match(letters)) && (!name=="") && (name.length>2))
    {
      
        
     
      if ((mno.length==10) && (!mno=="") && !isNaN(mno)){
        if((!pass=="") &&(pass.length>3)){
          if( (!repass=="")) {
          if((pass==repass) && (!repass=="")) {
            submitdata();
            
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


  
function Item({Name,Empid}){
  return(<View>
<Picker.Item label={Name} value={Empid} />
</View>
  );
}
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
      
      quality: 0.2,
      base64 :true
    });

    //IMAGe URI
     

    if (!result.cancelled) {

      setImage(result.base64)
        }
  }
  
  const openCam = async () => {
    let result1 = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [8,16],
      
      quality: 0.2,
      base64 :true
    });
    if (!result1.cancelled) {

      setImage(result1.base64)
     
        }
  }
  const submitdata=()=>{

    //alert("name is "+name+ ",password is "+password+" Employee id is "+empid+" role is "+role)
    fetch("http://484331d59aa3.ngrok.io/send-data",{

      method:"POST",
      headers:{
       
        'Content-Type':'application/json'
      },  
        body:JSON.stringify({
        'Name': name,  
        'Password': pass,
        'EmployeeId': empid,
        'Under':selectedValue,
        'Pfp':image
    })
      
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success==true)
        alert("Employee "+name+" is already registered!");
      else
        alert("Employee "+name+" is registered successfully!");
      console.log(data)
    
    })    
  }


  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.4)', 'transparent']}
        style={styles.container}
      >
           <View style={{flexDirection:'row' ,alignItems:'center'}}>
         <View style={{flexDirection:'column',marginRight:10}}>
         <TextInput
        placeholder="Employee Id" 
        placeholderTextColor='#3AB432'
        textAlign='left'
        value={empid}
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
      <View style={styles.bor}>
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
      selectedValue={selectedValue}
     
     style={{ color:'#3AB432', height: 35, width: 165 ,borderRadius:25}}
  
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    > 
      <Picker.Item label="Java" value="java" style={styles.txt}/>
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Python" value="jt" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Python" value="jt" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Python" value="jt" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Python" value="jt" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Python" value="jt" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Python" value="jt" />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="Python" value="jt" />
     

      {/* <FlatList
data={dataSource}
renderItem={({item})=>(
<Item Empid={item.Empid} Name={item.Name} />
 
)}
keyExtractor={(item)=>item.Barcode1}
/> */}
    </Picker>
    </View>
    </View>
    <View style={styles.bor}>
    <Text style={{fontSize:18,color:'#3AB432'}}>Upload Profile picture</Text>
    <View style={{flexDirection:'row'}}>
    <AwesomeButtonRick  onPress={()=>{openCam()}} style={styles.button} width={80} borderColor="#3DFDF4" borderWidth={2} backgroundColor="#fff" type="primary" >
      Click
    </AwesomeButtonRick>

    <AwesomeButtonRick  onPress={()=>{pickImage()}} style={styles.button} width={80} borderColor="#3DFDF4" borderWidth={2} backgroundColor="#fff" type="primary" >
      Upload
    </AwesomeButtonRick>
    </View>
   </View>
      </View>
      <TouchableOpacity  onPress={()=>{validate()}}>
    
     
   
           
    <AntDesign name="login" size={45}  color='#39E42D' />


</TouchableOpacity>

      </View>
      {image && <Image source={{ uri:("data:image/jpeg;base64,"+image)}} resizeMode='contain' style={{ width:333,height:333,marginBottom:5}} />}
      
   </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  bor:{
    borderColor:'#3AB432',
    borderWidth:1,
    borderRadius:20,
    padding:5,
    marginVertical:5
  }
  ,
  button: {
    
    alignItems: 'center',
    borderRadius: 5,
    marginVertical:5,
    marginHorizontal:5,
    width:80
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
     backfaceVisibility:'visible',
     backgroundColor:"blue",
      fontSize:15,
     color:"#39E42D",
       margin:0,
      textAlign:'center',
      textDecorationLine:'underline',
},
});