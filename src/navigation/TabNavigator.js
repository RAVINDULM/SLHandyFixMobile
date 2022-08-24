import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
  } from "react-native";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



import HomeScreen from '../screens/ServiceProvider/ServPro_home';
import Chat from '../screens/Chat';
import Notifications from '../screens/ServiceProvider/ServProv_Notifications';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="GameDetails"
//         component={GameDetailsScreen}
//         options={({route}) => ({
//           title: route.params?.title,
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#2538B8'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
         <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
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
        component={Chat}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({color, size}) => (
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
            tabBarIcon: ({color, size}) => (
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