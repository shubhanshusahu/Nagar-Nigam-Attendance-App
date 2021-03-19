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
const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true ,}}  >
    <AppStack.Screen name="Nagar Nigam"  component={StartPage}  />
    <AppStack.Screen name="Empolyee Login" component={EmpolyeeLogin} />    
  <AppStack.Screen name="Public Login" component={PublicLogin} />  
    <AppStack.Screen name="mark attendance" component={App} />
    <AppStack.Screen name="Home Page" component={EmpolyeeHome} />
    <AppStack.Screen name="Public Home Page" component={PublicHome} />
    {/* <AppStack.Screen name="Product" component={Product} /> */}
    </AppStack.Navigator>
    </NavigationContainer>
    );
}