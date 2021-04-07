import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState ,useEffect} from 'react';
import { useNavigation ,useRoute} from '@react-navigation/native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import renderIf from 'render-if';
export default function MyEmployee() {
  let dataSource=[];
  const navigation = useNavigation();
  const route=useRoute();
const [flag, setflag] = useState(false)
  useEffect(() => {
  
    (async () => {
   

// 
  })();
  }, []);

  fetch("http://d9333d7863ae.ngrok.io/getEmps",{

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
    dataSource.push({Name:route.params.Name+" (You)",empid:route.params.empid})
    for(var i in data) 
    { dataSource.push({'Name':data[i].Name,'empid':data[i].empid})
}
setflag(true);
  })

  return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.6)', 'transparent']}
        style={styles.background}
      />
      {renderIf(!flag)(
        <>
        <Image style={{height:100, width:110}} source={require('../../assets/loading.gif')}/>
        </>
      )}
{renderIf(flag)(<>
   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
   onPress={()=>{navigation.navigate("Add-New-Employee",{'Name':route.params.Name,'empid':route.params.empid,'under':route.params.under,'dataSource':dataSource})}} >
      Add New Employee
    </AwesomeButtonRick>
      
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
    onPress={()=>{navigation.navigate("Checking Attendance")}} >
      Checking Attendance
    </AwesomeButtonRick>
    
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
    onPress={()=>{navigation.navigate("Mark Attendance")}} >
      Marking Attendance
    </AwesomeButtonRick>
  
   <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary" 
   onPress={()=>{navigation.navigate("Employee-Detail",{'Name':route.params.Name,'empid':route.params.empid,'under':route.params.under,'dataSource':dataSource})}}  >
      Employee-Details
    </AwesomeButtonRick>
     
    <AwesomeButtonRick  style={styles.button} textColor="#fff" width={200} borderColor="#FFF" borderWidth={2}  backgroundColor="#7A33FF" type="secondary"  >
      Add Work Location
    </AwesomeButtonRick>
    </>
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
       padding:5,
       marginBottom:20,
    
       borderWidth:1,
       borderRadius:13,
       borderColor:'#7A33FF',
     
  },
});