import React from "react";
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
// import Axios from "axios"
const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#2538B8", white: "#fff" };

const Home = ({ navigation }) => {
  
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source= {require("../assests/imgs/Logo.png")}
          style={{ height: "70%", width, resizeMode: "contain", margin: 30}}
        />
      </View>
      <View style={{ alignItems: "center", height: 50 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.replace("AuthHomeServProv")}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>I WANT TO WORK</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", height: 50, margin: 10 }}>
        <TouchableOpacity  
          style={styles.btn}
          onPress={() => navigation.replace("AuthHomeCustomer")}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>I WANT TO HIRE</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{ alignItems: "center", height: 50, margin: 10 }}>
        <TouchableOpacity  
          style={styles.btn}
          onPress={() => callApi()}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>I WANT TO HIRE</Text>
        </TouchableOpacity>
      </View> */}
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
