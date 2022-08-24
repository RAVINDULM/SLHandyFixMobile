import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  value,
  onChangeText
} from "react-native";

import CustomButton from "../components/CustomButton";
// import InputField from "../components/InputField";
import { AuthContext } from "../context/AuthContext";

// const { width, height } = Dimensions.get("window");
// const COLORS = { primary: "#2538B8", white: "#fff" };

const Login = ({ navigation }) => {
  const [email , setEmail] = useState(null);
  const [password , setPassword] = useState(null);
  const {Login} = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        {/* <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assests/imgs/Login.png")}
            style={{ height: "70%",  resizeMode: "contain", margin: 30}}
          />
        </View> */}

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Log In
        </Text>
        <TextInput style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
          label={"Email ID"}
          // icon={}
           placeholder="Enter your email"
          keyboardType="email-address"
          value ={email}
          onChangeText = {(email) => setEmail(email)}
        />
 {/* <TextInput
        label="First Name"
        value={fName}
        // error
        onChangeText={(fName) => setfName(fName)}
      /> */}
        <TextInput style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
          label={"Password"}
          // icon={}
          inputType="password"
          placeholder="Enter your passsword"
          secureTextEntry= {true}
          value = {password}
          onChangeText = {(password) => setPassword(password)}
        />
       {/* { console.log(email)} */}
       {/* { console.log(password)} */}
        <CustomButton label={"Login"} onPress={() => {Login(email,password)}} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ServProv_Register")}>
            <Text style={{ color: "#2538B8", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
