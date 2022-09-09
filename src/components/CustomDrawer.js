import React, { useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from '@fortawesome/react-native-fontawesome';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from "react-native-fontawesome";
import { AuthContext } from "../context/AuthContext";

const CustomDrawer = (props) => {
  const { Logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#2538B8" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#2538B8" }}
      >
        <ImageBackground style={{ padding: 20, flex: 1, flexDirection: "row" }}>
          {/* <Image
            source={require('../assets/images/user-profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          /> */}
          <ImageBackground
            source={require("../assests/imgs/User01.jpg")}
            style={{ width: 50, height: 50 }}
            imageStyle={{ borderRadius: 25 }}
          />
          <View style={{ flexDirection: "column", paddingLeft: 20, flex: 1 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                // fontFamily: 'Roboto-Medium',
                marginBottom: 5,
              }}
            >
              John Doe
            </Text>

            <Text
              style={{
                color: "#fff",
                // fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}
            >
              076 1234567
            </Text>
            {/* <FontAwesome  style={{fontSize: 32}} icon={BrandIcons.facebookMessenger} /> */}
            {/* <FontAwesome  style={{fontSize: 32}} icon={SolidIcons.smile} /> */}
          </View>
          {/* <TouchableOpacity  style={{ justifyContent:"center"}} onPress={() => navigation.closeDrawer()}>
            <ImageBackground
              source={require("../assests/imgs/LeftArrow.png")}
              style={{ width: 30, height: 30, justifyContent:"center"}}
            />
          </TouchableOpacity>     */}
        </ImageBackground>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{ paddingVertical: 15, borderRadius: 6, margin: 4 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Ionicons name="share-social-outline" size={22} /> */}
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: "#fff",
              }}
            >
              Color schema
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Logout();
          }}
          style={{ paddingVertical: 15, borderRadius: 8, margin: 4 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Ionicons name="exit-outline" size={22} /> */}
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: "#fff",
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
