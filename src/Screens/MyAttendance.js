import * as React from 'react';
import { StyleSheet,FlatList, Text, View,TouchableOpacity,TextInput,Image,KeyboardAvoidingView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useNavigation ,useRoute} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import renderIf from 'render-if'; 
var dataSource=[];
export default function Myattendance(){
    const navigation = useNavigation();
    const route=useRoute();
    const [flag, setFlag] = useState(false)
    var empid=route.params.empid;

 fetch("http://8f473b505af7.ngrok.io/viewattendance", {
  method: "POST",
  headers:{
 
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    
    "EmployeeId":empid,
   
  })
  

}).then(data=>data.json())
.then((data)=>{
dataSource=data;

setFlag(true);
})



    function Item({Date,latitude,longitude,imag}){
        return(<View style={styles.row2}>
          <TouchableOpacity style={styles.txt1} onPress={()=>{navigation.navigate("Locate" ,{'latitude':latitude,'longitude':longitude,'image':imag})}} style={styles.Listitems}>
          
          <Image
        style={ {backgroundColor:'#2196F3',
         padding:5,
         height:60,width:60,borderRadius:50}}
        source={{
          uri: (imag)
        }}
      />
           
            <Text style={styles.txt1}> {Date} </Text>
          
     
          </TouchableOpacity>
          
          </View>
        );
      }
    return (
     
        
        <LinearGradient
          // Background Linear Gradient
        
          colors={['rgba(122, 51, 255,0.2)', 'transparent']}
          style={styles.container}
        > 
        {
         renderIf(!flag)(<>
        <Image style={{width:120,height:120}} source={require('../../assets/loading3.gif')}/>

        <Text style={{color:'#fff'}}>Loading...</Text>
        </>
        )}
             {
  renderIf(flag)(
    <>
        <View style={{flexDirection:'row'}}>
        
            <Text style={styles.txt}>Your Attendance</Text>
            
        </View>
 
        <FlatList
        data={dataSource}
        renderItem={({item})=>(
        <Item Date={item.Date} latitude={item.Latitude} longitude={item.Longitude} imag={item.Photo} />
        
        )}
        keyExtractor={(item)=>item._id}
        />
        </>
        )}
        </LinearGradient>     
    );
}




const styles = StyleSheet.create({
    container: {
      borderWidth:2,
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      ...Platform.select({
        ios: {
          flex:1,
          
        },
        android: {
          flex:1,
         flexDirection:'column'
          
        },
        default: {
          flexDirection:'column',
         flex:1,
        // flexDirection:'row '
        }
      }),
      
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Listitems:{
      flexDirection:'row',
        borderRadius:15,
    },
    rowcol:{
      ...Platform.select({
        ios: {
         
          flexDirection:'column'
        },
        android: {
          marginTop:5,
         flexDirection:'column'
          
        },
        default: {
          flexDirection:'row',
      
        }
      }),
    },
    header:{
      color:"#fff",
     
      marginBottom:5,
      marginTop:15,
  
      borderColor:"#9CDCFE",
      padding:2,  
      ...Platform.select({
        ios: {
         fontSize:15,
        marginHorizontal:3,
        },
        android: {
          fontSize:15,
          marginHorizontal:3,
          
        },
        default: {
          flexDirection:'row',
          width:250,
       fontSize:25,
        },
      }),
      textAlign:'left'
    },
    header1:{
      color:"#fff",
      fontSize:25,
      marginBottom:15,
      borderWidth:1,
      borderRadius:12,
      borderColor:"#9CDCFE",
      padding:2,  
      width:"100%",
      flexDirection:"row"
    },
  
    row2:{flexDirection:'row'},
    lbl:{
      color:"#fff",
      fontSize:20,
      flexDirection:"row",
      marginHorizontal:25,
    },
    txtupdate:{
  
      height: 30,
      ...Platform.select({
        ios: {
         
          width:300
        },
        android: {
    
         width:300
          
        },
        default: {
          flexDirection:'row',
          width:200
      
        }
      }),
      marginBottom:5,
      fontSize:18,
       color:"#fff",
        textAlign:'center',
       backgroundColor:'#2196F3',
         padding:5,
       
    },
    txt:{
  
      ...Platform.select({
        ios: {
         
          width:60
        },
        android: {
    
        },
        default: {
          flexDirection:'row',
          width:200,
      textAlign:'center',
      alignItems:'center'
        }
      }),
      marginBottom:5,
      fontSize:28,
       color:"#fff",
        textAlign:'left',
      //  backgroundColor:'#2196F3',
         padding:5,
       
    },
    txt1:{
      
      height: 30,
      ...Platform.select({
        ios: {
         
          width:150
        },
        android: {
    
         width:200,
          height:60
        },
        default: {
          flexDirection:'row',
          width:350
      
        }
      }),
      marginBottom:5,
      fontSize:18,
       color:"#fff",
        textAlign:'left',
       backgroundColor:'#2196F3',
         padding:5,
    
    },
    
      btn: {
        backfaceVisibility:'visible',
        backgroundColor:'#2196F3',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
         height:30,
        ...Platform.select({
          ios: {
            margin:5,
        width:170,
        height:30,
        padding:0,
          },
          android: {
           
            margin:5,
        width:170,
        height:30,
        padding:0,
          },
          default: {
           width:170,
           margin:5
          
          }
        }),
        
      },
    
    btn2:
    {
      marginHorizontal:15,
    },
    roww:{
      
       flexDirection:"row",
      //  width:"75%",
       paddingLeft:10,
       borderWidth:1,
       borderRadius:10,
       marginBottom:8,
       marginTop:15,
      
       borderColor:"#2196F8",
      },
      txt2:
      {
        height: 30,
        width :160,
        ...Platform.select({
          ios: {
           
           marginBottom:5
          },
          android: {
      
          marginBottom:5
            
          },
          default: {
          marginRight:10,
          }
        }),
        fontSize:15,
         color:"#fff",
          textAlign:'left',
         backgroundColor:'#2196F8',
           padding:5,
      },
      txt3:
      {
        height: 30,
        width :35,
       
        
         
          textAlign:'left',
         backgroundColor:'#2196F8',
           padding:5,
      },
      border:{
        borderWidth:1,
        borderRadius:15,
        padding:10,
        borderColor:"#2196F3",
        marginTop:20,
  
        alignItems:'center'
      },
      border2:{
        borderWidth:1,
        borderRadius:15,
        padding:10,
        borderColor:"red",
        marginTop:20,
        marginHorizontal:10,
  
      },
    bor:{
  //flex:1,
  flexDirection:"row",
  marginHorizontal:10,
    },
    bor2:{
  flexDirection:"row",
    },
    Text:{
      marginLeft:10,
    }
  });
  