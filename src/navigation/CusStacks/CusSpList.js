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
import Cus_Service from "../../screens/Customer/Cus_Service";
import Cus_PlaceJobs from "../../screens/Customer/Cus_PlaceJobs";
import Cus_spProfileView from "../../screens/Customer/Cus_spProfileView";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();

const CusServiceProviderStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cus_Service"
        component={Cus_Service}
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
              <Appbar.Content title="Service Provider" />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Cus_PlaceJobs"
        component={Cus_PlaceJobs}
        options={({ route, navigation }) => ({
            header: () => (
              <Appbar.Header style={{ backgroundColor: "white" }}>
                {/* <Appbar.BackAction onPress={() => navigation.navigate("Cus_Service")}/> */}
                <TouchableOpacity onPress={() => navigation.navigate("Cus_Service")}>
                <Ionicons name="arrow-back-outline" size={30} />
                </TouchableOpacity>
                {/* <Appbar.Content title={route.name} /> */}
                <Appbar.Content title="Place Jobs" />
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
                {/* <Appbar.BackAction onPress={() => navigation.navigate("Cus_Service")}/> */}
                <TouchableOpacity onPress={() => navigation.navigate("Cus_Service")}>
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

export default CusServiceProviderStack;