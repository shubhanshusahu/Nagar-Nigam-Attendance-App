import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import  Home from '../screens/home'
import StartPage from '../Screens/startpage'
import App from '../Screens/MarkAttendance'
import EmpolyeeLogin from '../Screens/Empolyeelogin'
import PublicLogin  from '../Screens/PublicLogin'
import EmpolyeeHome  from '../Screens/HomePageEmpolyee'
import PublicHome  from '../Screens/HomePagePublic'
import MyEmployee  from '../Screens/MyEmployee'
import PublicSignUp  from '../Screens/PublicSignUp'
import EmpDetails from  '../Screens/EmpDetails'
import Myattendance from  '../Screens/MyAttendance'
import Locate from '../Screens/Locate'
import EmployeeSignUp from '../Screens/Employee-SignUp'
import CheckingAttendance from '../Screens/CheckingAttendance'
import PublicComplain from '../Screens/PublicComplain'
const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true ,}}  >
    <AppStack.Screen name="Nagar Nigam"  component={StartPage}  />
    <AppStack.Screen name="Empolyee Login" component={EmpolyeeLogin} />    
  <AppStack.Screen name="Public Login" component={PublicLogin} />  
    <AppStack.Screen name="Mark Attendance" component={App} />
    <AppStack.Screen name="Home Page" component={EmpolyeeHome} />
    <AppStack.Screen name="Public Home Page" component={PublicHome} />
    <AppStack.Screen name="My Employee" component={MyEmployee} />
    <AppStack.Screen name="Sign-Up" component={PublicSignUp} />
    <AppStack.Screen name="Employee-Detail" component={EmpDetails} />
    <AppStack.Screen name="My-Attendance" component={Myattendance} />
    <AppStack.Screen name="Locate" component={Locate} />
    <AppStack.Screen name="Add-New-Employee" component={EmployeeSignUp} />
    <AppStack.Screen name="Complain" component={PublicComplain} />
    <AppStack.Screen name="Checking Attendance" component={CheckingAttendance} />


    {/* <AppStack.Screen name="Product" component={Product} /> */}
    </AppStack.Navigator>
    </NavigationContainer>
    );
}