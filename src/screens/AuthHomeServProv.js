import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import tw from "twrnc";
const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#2538B8", white: "#fff" };
const AuthHomeServProv = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* <View style={[tw`bg-white flex-row z-100 `]}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size={30} />
        </TouchableOpacity>
      </View> */}
      <View>
        <Image
          source={require("../assests/imgs/TopLeftCorner.png")}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            right: 5,
            top: 1,
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assests/imgs/Logo.png")}
          style={{
            height: "60%",
            width,
            resizeMode: "contain",
            marginTop: 50,
          }}
        />
      </View>
      <View style={{ alignItems: "center", height: 50 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ffff" }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", height: 50, margin: 10 }}>
        <TouchableOpacity
          style={styles.btn_outlined}
          onPress={() => navigation.replace("ServProv_Register")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  btn: {
    flex: 1,
    height: 60,
    borderRadius: 5,
    width: width * 0.8,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_outlined: {
    flex: 1,
    height: 60,
    borderRadius: 5,
    width: width * 0.8,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
  },
});
export default AuthHomeServProv;
