import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import CustomDrawer from '../components/CustomDrawer';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from "../components/CustomDrawer";
import ServProv_Jobs from "../screens/ServiceProvider/ServProv_Jobs";
import ServProv_Profile from "../screens/ServiceProvider/ServPro_Profile";

// import ServProv_analyticStack from "../screens/ServiceProvider";
import JobSaved from "../screens/ServiceProvider/JobOrderSaved";
import TransactionCompleted from "../screens/ServiceProvider/TransactionCompleted";

// import stacks
import ServProv_analyticStack from "../navigation/ServProStacks/ServPro_AnalyticStack";
import CalanderStack from "../navigation/ServProStacks/ServProvCalanderStack";
import JobRequestsStack from "./ServProStacks/ServPro_JobReqStack";
// react native paper app bar
import { Appbar } from "react-native-paper";
import { Menu } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import TabNavigator from "./TabNavigator";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ServProvAppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#ffff",
        drawerActiveTintColor: "#2538B8",
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: {
          // marginLeft: -25,
          // fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              style={{ marginRight: -15 }}
              name="md-home"
              size={size}
              color={focused ? "#2538B8" : "#fff"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={CalanderStack}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              style={{ marginRight: -15 }}
              name="calendar-outline"
              size={size}
              color={focused ? "#2538B8" : "#fff"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Job Requests"
        component={JobRequestsStack}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              style={{ marginRight: -15 }}
              name="briefcase-outline"
              size={size}
              color={focused ? "#2538B8" : "#fff"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Progress"
        component={ServProv_analyticStack}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              style={{ marginRight: -15 }}
              name="analytics-outline"
              size={size}
              color={focused ? "#2538B8" : "#fff"}
            />
          ),
        }}
      />

      {/* insert these items in dialog box show after completion and create same for error */}

      {/* <Drawer.Screen name="JobSaved" component={JobSaved} /> */}
      {/* <Drawer.Screen name="TransactionCompleted" component={TransactionCompleted} /> */}
      {/* <Drawer.Screen name="Calanader" component={ServProv_calanader}  />     */}
    </Drawer.Navigator>
  );
};

export default ServProvAppStack;
