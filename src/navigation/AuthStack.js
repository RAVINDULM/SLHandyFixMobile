import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Home from "../screens/Home";
import AuthHomeServProv from "../screens/AuthHomeServProv";
import AuthHomeCustomer from "../screens/AuthHomeCustomer";
import Cus_Register from "../screens/Customer/auth/Cus_Register";
import ServProv_Register from "../screens/ServiceProvider/auth/ServProv_Register";
import { TouchableOpacity } from "react-native";
// import ServProv_RegisterPayment  ""
import AsyncStorage from "@react-native-async-storage/async-storage";
// import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from "../screens/Login";
// react native paper app bar
import { Appbar } from "react-native-paper";
import { Menu } from "react-native-paper";
const Stack = createStackNavigator();

import {
  faCheck,
  faChevronLeft,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ionicons from "@expo/vector-icons/Ionicons";
// const SerProRegisterStack = ()=>{
//   <Stack.Navigator>
//   <Stack.Screen options={{headerShown: false}}  name="ServProv_RegisterDetails" component={ServProv_RegisterDetails} />
//   <Stack.Screen options={{headerShown: false}}  name="ServProv_RegisterMobile" component={ServProv_RegisterMobile} />
//   <Stack.Screen options={{headerShown: false}}  name="ServProv_RegisterPayment" component={ServProv_RegisterPayment} />
//   </Stack.Navigator>
// }

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}

      {/* {isAppFirstLaunched && ( */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Landing"
        component={Landing}
      />
      {/* )} */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        // options={{ headerTransparent: true, headerBackVisible: true }}
        name="AuthHomeServProv"
        component={AuthHomeServProv}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              {/* <Appbar.BackAction onPress={() => navigation.navigate("Home")} /> */}
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name="arrow-back-outline" size={30} />
              </TouchableOpacity>
              <Appbar.Content title="Service Provider" />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="AuthHomeCustomer"
        component={AuthHomeCustomer}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              {/* <Appbar.BackAction onPress={() => navigation.navigate("Home")} /> */}
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name="arrow-back-outline" size={30} />
              </TouchableOpacity>
              <Appbar.Content title="Customer" />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Cus_Register"
        component={Cus_Register}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              {/* <Appbar.BackAction
                onPress={() => navigation.navigate("AuthHomeCustomer")}
              /> */}
              <TouchableOpacity
                onPress={() => navigation.navigate("AuthHomeCustomer")}
              >
                <Ionicons name="arrow-back-outline" size={30} />
              </TouchableOpacity>
              <Appbar.Content title="Register" />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="ServProv_Register"
        component={ServProv_Register}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("AuthHomeServProv")}
              >
                <Ionicons name="arrow-back-outline" size={30} />
              </TouchableOpacity>
              <Appbar.Content title="Register" />
              <Appbar.Action icon={faCheck} size={24} />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={({ route, navigation }) => ({
        //   header: () => (
        //     <Appbar.Header style={{ backgroundColor: "white" }}>
        //       <Appbar.BackAction
        //         onPress={() => navigation.navigate("AuthHomeCustomer")}
        //       />
        //       <Appbar.Content title={route.name} />
        //     </Appbar.Header>
        //   ),
        // })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
