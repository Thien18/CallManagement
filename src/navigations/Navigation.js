// navigation.tsx  

import Login from '../screens/Login'
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';  

const Stack = createNativeStackNavigator();  


  



function AppNavigator() {  
  return (  
    <Stack.Navigator initialRouteName="Login">  
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} /> 
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
    </Stack.Navigator>  
  );  
}  


function Navigation() {  
  return (  
    <NavigationContainer>  
      <AppNavigator />  
    </NavigationContainer>  
  );  
}  

export default Navigation;  