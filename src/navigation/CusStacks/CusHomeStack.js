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
import Cus_home from "../../screens/Customer/Cus_home";
import Cus_spProfileView from "../../screens/Customer/Cus_spProfileView";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();

const CusHomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cus_Home"
        component={Cus_home}
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
              <Appbar.Content title="Home" />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Cus_spProfileView"
        component={Cus_spProfileView}
        options={({ route, navigation }) => ({
            header: () => (
              <Appbar.Header style={{ backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Cus_Home")}>
                <Ionicons name="arrow-back-outline" size={30} />
                </TouchableOpacity>
                {/* <Appbar.Content title={route.name} /> */}
                <Appbar.Content title="Service Provider Profile" />
              </Appbar.Header>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

export default CusHomeStack;