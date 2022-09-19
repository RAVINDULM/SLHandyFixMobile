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
import Cus_Profile from '../../screens/Customer/Cus_Profile';
import Edit_Profile from "../../screens/Customer/Cus_EditProfile";
// import Cus_EditProfile from '../screens/Customer/Cus_EditProfile';

import TabNavigator from "../TabNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const CustomerProfile = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="My Profile"
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
                <Appbar.Content title={route.name} />
              </Appbar.Header>
            ),
          })}
        />
        <Stack.Screen
          name="Edit Profile"
          component={Edit_Profile}
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
      </Stack.Navigator>
    );
  };
  
  export default CustomerProfile;