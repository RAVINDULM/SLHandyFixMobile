import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native";
// import AuthHome from "./src/screens/AuthHome";
import AuthStack from "../navigation/AuthStack";
import CustomerAppStack from "../navigation/CustomerAppStack";
import ServProvAppStack from "../navigation/ServProvAppStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import jwt_decode from "jwt-decode";

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <ServProvAppStack />
    </NavigationContainer>
  );
  // var decoded = jwt_decode(userToken);
  // console.log("decoded values: ", decoded);
  // console.log("App nav user token :", userToken);
  //   if (isLoading) {
  //     return (
  //       <NavigationContainer>
  //         <View
  //           style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  //         >
  //           <ActivityIndicator size={"large"} />
  //         </View>
  //       </NavigationContainer>
  //     );
  //   } else if (userToken != null) {
  //     console.log("not null called", userToken.size);
  //     var decoded = jwt_decode(userToken);
  //     console.log("decoded values: ", decoded.type);
  //     console.log("not null called");
  //     // return (
  //     //     <NavigationContainer>
  //     //         <ServProvAppStack/>
  //     //     </NavigationContainer>
  //     // );
  //     if (decoded.type == "customer") {
  //       return (
  //         <NavigationContainer>
  //           <CustomerAppStack />
  //         </NavigationContainer>
  //       );
  //     } else if (decoded.type == "serviceProvider") {
  //       return (
  //         <NavigationContainer>
  //           <ServProvAppStack />
  //         </NavigationContainer>
  //       );
  //     }
  //   } else if (userToken == null) {
  //     console.log("null called");
  //     return (
  //       <NavigationContainer>
  //         <AuthStack />
  //       </NavigationContainer>
  //     );
  //   }
}

export default AppNav;
