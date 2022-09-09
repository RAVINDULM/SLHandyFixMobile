import React from "react";

// react native paper app bar
import { Appbar, Avatar } from "react-native-paper";
import { Menu } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

// import relavant screens
import ServProv_Home from "../../screens/ServiceProvider/ServPro_home";
import ServPro_Profile from "../../screens/ServiceProvider/ServPro_Profile";

import TabNavigator from "../TabNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faCheckCircle,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
// import Icon from '@iconify-icons/icons8';
const element = <FontAwesomeIcon icon={faCheckCircle} />;
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="ServProv_Home"
        component={ServProv_Home}
        options={({ route, navigation }) => ({
          header: () => (
            <Appbar.Header
              style={{ backgroundColor: "white", height: 34, margin: 8 }}
            >
              {/* <Appbar.Action
                icon={element}
                onPress={() => navigation.openDrawer()}
              /> */}

              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FontAwesomeIcon
                  icon={faBars}
                  size={24}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>

              <Appbar.Content title={route.name} />
              <TouchableOpacity onPress={() => navigation.navigate("Jobs")}>
                <ImageBackground
                  source={require("../../assests/imgs/User01.jpg")}
                  style={{ width: 35, height: 35, marginRight: 10 }}
                  imageStyle={{ borderRadius: 25 }}
                ></ImageBackground>
              </TouchableOpacity>

              {/* </TouchableOpacity> */}
            </Appbar.Header>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
