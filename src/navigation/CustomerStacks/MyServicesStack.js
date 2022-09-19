import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Appbar } from "react-native-paper";
import {
    faBars,
    faCheckCircle,
    faTable,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

import Cus_Service from '../../screens/Customer/Cus_Service'
import Cus_spProfileView from '../../screens/Customer/Cus_spProfileView';



const Stack = createStackNavigator();

const MyServicesStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="My Services"
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
                <Appbar.Content title={route.name} />
              </Appbar.Header>
            ),
          })}
        />
        <Stack.Screen
          name="Service Provider Profile"
          component={Cus_spProfileView}
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
  
  export default MyServicesStack;