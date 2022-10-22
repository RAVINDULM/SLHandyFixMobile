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

import { TouchableOpacity } from "react-native-gesture-handler";
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
                <Appbar.BackAction onPress={() => navigation.navigate("Cus_Service")}/>
                {/* <TouchableOpacity onPress={() => navigation.navigate("Cus_Profile")}>
                  <FontAwesomeIcon
                    icon={faStepBackward}
                    size={24}
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity> */}
                {/* <Appbar.Content title={route.name} /> */}
                <Appbar.Content title="Place Jobs" />
              </Appbar.Header>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

export default CusServiceProviderStack;