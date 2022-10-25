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
import Cus_JobAD from "../../screens/Customer/Cus_JobAD";
import Cus_viewJobAD from "../../screens/Customer/Cus_viewJobAD";
import Cus_PostJobAD from "../../screens/Customer/Cus_PostJobAD";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();

const CusAdvertisementStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cus_JobAD"
        component={Cus_JobAD}
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
              <Appbar.Content title="Job Advertisement" />
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Cus_viewJobAD"
        component={Cus_viewJobAD}
        options={({ route, navigation }) => ({
            header: () => (
              <Appbar.Header style={{ backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Cus_JobAD")}>
                <Ionicons name="arrow-back-outline" size={30} />
                </TouchableOpacity>
                {/* <Appbar.Content title={route.name} /> */}
                <Appbar.Content title="Advertisement Details" />
              </Appbar.Header>
            ),
          })}
      />

      <Stack.Screen
        name="Cus_PostJobAD"
        component={Cus_PostJobAD}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Cus_JobAD")}>
              <Ionicons name="arrow-back-outline" size={30} />
              </TouchableOpacity>
              {/* <Appbar.Content title={route.name} /> */}
              <Appbar.Content title="Add New Advertisement" />
            </Appbar.Header>
          ),
        })}
      />

    </Stack.Navigator>
  );
};

export default CusAdvertisementStack;