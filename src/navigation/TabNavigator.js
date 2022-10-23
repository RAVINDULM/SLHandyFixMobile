import React, { useState } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// importing screens
import HomeScreen from "../screens/ServiceProvider/ServPro_home";
import MessagesScreen from "../screens/MessagesScreen";
import Notifications from "../screens/ServiceProvider/ServProv_Notifications";
import ChatScreen from "../screens/Chat";

// react native paper app bar
import { Appbar } from "react-native-paper";
import { Menu } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { Avatar } from "react-native-paper";

// icons libraries
// import Ionicons from "react-native-ionicons";
import Ionicons from "@expo/vector-icons/Ionicons";
// import Ionicons from "react-native-vector-icons/Ionicons";
import {
  faBackspace,
  faBell,
  faChevronLeft,
  faHome,
  faHouse,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  // faChevronLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import servProStack from "./ServProvAppStack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import HomeStack from "./ServProStacks/ServProvHomeStack";
// create stack and tab navigator variables
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MessageStack = ({ navigation, route }) => {
  // const [name, setName] = useState("");

  // tab navigator visibility control

  // menu itms use states
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // seachbar use states
  const [visibleSearch, setVisibleSearch] = React.useState(true);
  // const [openSearch, setOpenSearch] = useState(false)
  const openSearch = () => setVisibleSearch(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  // const closeSearch = () => setVisibleSearch(false);
  // const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen
        name="Message"
        // {{setName(name)}}
        component={MessagesScreen}
        // options={{
        //   header: (props) => <CustomAppBar {...props} />,
        // }}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              <Appbar.Content title={route.name} />
              {/* <Appbar.Action
                      icon="search"
                      color="black"
                      onPress={openSearch}
                    /> */}
              {/* {visibleSearch ? null : (
                <Appbar.Action
                  icon="menu"
                  color="black"
                  onPress={closeSearch}
                />
              )} */}
              {/* {visibleSearch ? (
                <Searchbar
                  // visible={false}
                  // elevation={2}
                  // style={{ borderRadius: 10 }}
                  onDismiss={closeSearch}
                  placeholder="Search"
                  onChangeText={onChangeSearch}
                  value={searchQuery}
                />
              ) : (
                <Appbar.Action
                  icon="search"
                  color="black"
                  onPress={openSearch}
                />
              )} */}
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <Appbar.Action icon="menu" color="black" onPress={openMenu} />
                }
              >
                <Menu.Item
                  onPress={() => {
                    console.log("Option 1 was pressed");
                  }}
                  title="Option 1"
                />
                <Menu.Item
                  onPress={() => {
                    console.log("Option 2 was pressed");
                  }}
                  title="Option 2"
                />
                <Menu.Item
                  onPress={() => {
                    console.log("Option 3 was pressed");
                  }}
                  title="Option 3"
                  disabled
                />
              </Menu>

              <TouchableOpacity>
                <Avatar.Icon
                  size={30}
                  style={{ backgroundColor: "black", marginRight: 10 }}
                  onPress={() => navigation.navigate("HomeScreen")}
                />
              </TouchableOpacity>
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.userName,
        })}
        screenOptions={({ navigation, route }) => ({
          // presentation: "modal",
          // title: route.params.userName,

          headerLeft: () => <CancelButton onPress={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  // hide tab bar from specific screens
  const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Chat") {
      console.log("chat screen found");
      return -1;
    } else {
      return 0;
    }
  };
  // hide tab bar from specific screens

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabnavStyles,
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={30}
              color={focused ? "#2538B8" : "#808080"}
            />
            // <ion-icon name=""></ion-icon>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={MessageStack}
        options={({ route }) => ({
          tabBarBadge: 3,
          tabBarStyle: {
            // display: getRouteName(route),
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.8,
            shadowRadius: 56.0,
            elevation: 24,
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 0,
            padding: 10,
            width: "100%",
            height: 64,
            zIndex: getRouteName(route),
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={30}
              color={focused ? "#2538B8" : "#808080"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={30}
              color={focused ? "#2538B8" : "#808080"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabnavStyles: {
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 56.0,
    elevation: 24,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 10,
    width: "100%",
    height: 64,
    zIndex: 0,
  },
});
