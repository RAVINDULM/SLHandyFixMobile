import React from "react";

// react native paper app bar
import { Appbar } from "react-native-paper";
import { Menu } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faBackspace,
    faBackward,
  faBackwardStep,
  faBars,
  faCheckCircle,
  faStepBackward,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
// import relavant screens
import Cus_Profile from "../../screens/Customer/Cus_Profile";
import Cus_EditProfile from "../../screens/Customer/Cus_EditProfile";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();

const CusProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cus_Profile"
        component={Cus_Profile}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FontAwesomeIcon
                  icon={faBars}
                  size={24}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
              {/* <Appbar.Content title={route.name} /> */}
              <Appbar.Content title="Profile" />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Cus_EditProfile"
        component={Cus_EditProfile}
        options={({ route, navigation }) => ({
            header: () => (
              <Appbar.Header style={{ backgroundColor: "white" }}>
                {/* <Appbar.BackAction onPress={() => navigation.navigate("Cus_Profile")}/> */}
                <TouchableOpacity onPress={() => navigation.navigate("Cus_Profile")}>
                <Ionicons name="arrow-back-outline" size={30} />
               
                </TouchableOpacity>
                {/* <Appbar.Content title={route.name} /> */}
                <Appbar.Content title="Edit Profile" />
              </Appbar.Header>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

export default CusProfileStack;