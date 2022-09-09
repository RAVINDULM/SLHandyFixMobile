import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
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

// icons libraries
import Ionicons from "react-native-vector-icons/Ionicons";
import { faBackspace, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  // faChevronLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// create stack and tab navigator variables
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MessageStack = ({ navigation, back }) => {
  // const [name, setName] = useState("");

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
              {/* {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
              <Appbar.Content title="Messages" /> */}
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
            </Appbar.Header>
          ),
        })}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        // options={{
        //   header: (props) => <CustomAppBar {...props} />,
        // }}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header style={{ backgroundColor: "white" }}>
              <Appbar.BackAction onPress={navigation.goBack} />
              <Appbar.Content title={route.params.userName} />
            </Appbar.Header>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#2538B8" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, size }) => (
            <ImageBackground
              source={require("../assests/icons/icons8-home-30.png")}
              style={{ width: 30, height: 30 }}
              imageStyle={{ borderRadius: 25 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={MessageStack}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <ImageBackground
              source={require("../assests/icons/icons8-chat-30.png")}
              style={{ width: 30, height: 30 }}
              imageStyle={{ borderRadius: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ImageBackground
              source={require("../assests/icons/icons8-notification-64.png")}
              style={{ width: 30, height: 30 }}
              imageStyle={{ borderRadius: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const getTabBarVisibility = route => {
//   // console.log(route);
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
//   // console.log(routeName);

//   if( routeName == 'GameDetails' ) {
//     return 'none';
//   }
//   return 'flex';
// };

export default TabNavigator;
