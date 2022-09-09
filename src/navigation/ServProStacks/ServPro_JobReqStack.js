import React from "react";

// react native paper app bar
import { Appbar } from "react-native-paper";
import { Menu } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faCheckCircle,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
// import relavant screens
import ServProv_Jobs from "../../screens/ServiceProvider/ServProv_Jobs";

import TabNavigator from "../TabNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";
const Stack = createStackNavigator();

const JobRequestsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ServProv_Calander"
        component={ServProv_Jobs}
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
              <Appbar.Content title={route.name} />
            </Appbar.Header>
          ),
        })}
      />
      {/* <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default JobRequestsStack;
