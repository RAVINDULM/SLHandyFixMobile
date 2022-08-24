import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Home from "../screens/Home";
import AuthHomeServProv from "../screens/AuthHomeServProv";
import AuthHomeCustomer from "../screens/AuthHomeCustomer";
import Cus_Register from "../screens/Customer/auth/Cus_Register";
import ServProv_Register from "../screens/ServiceProvider/auth/ServProv_Register"
import AsyncStorage from "@react-native-async-storage/async-storage";
// import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      
       {/* {isAppFirstLaunched && ( */}
       <Stack.Screen options={{headerShown: false}}  name="Landing" component={Landing}/>
        {/* )} */}
        <Stack.Screen options={{headerShown: false}}  name="Home" component={Home} />
        <Stack.Screen options={{headerTransparent: true, headerBackVisible: true}} name="AuthHomeServProv" component={AuthHomeServProv} />
        <Stack.Screen options={{headerTransparent: true, headerBackVisible: true}} name="AuthHomeCustomer" component={AuthHomeCustomer} />
        <Stack.Screen name="Cus_Register" component={Cus_Register} />
        <Stack.Screen name="ServProv_Register" component={ServProv_Register} />
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;