import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/CustomButton";

const TransactionCompleted = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 10 ,
        // alignItems: "center",
        // backgroundColor: 'yellow'
      }}
    >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/menu.png")}
              style={{ width: 30, height: 30 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          {/* <Text style={{ fontSize: 18}}>
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/User01.jpg")}
              style={{ width: 40, height: 40 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity> */}
        </View>

      <ScrollView style={{ padding: 20 }}>
        {/*---------------------------------------------------------- Body section -----------------------------------------------------------------------------------*/}
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            // ,backgroundColor: 'blue'
            // paddingTop: 50,
          }}
        >
          <ImageBackground
            source={require("../../assests/imgs/TransactionCompleted.png")}
            style={{ width: 300, height: 300, }}
            // imageStyle={{ borderRadius: 60 }}
          />          
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                paddingRight: 10,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold", margin: 10, }}>
              Transaction Completed!
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "250" }}>
              You will receive the notification shortly! Thank you for choosing our services!
              </Text>
          </View>
        </View>
        {/*---------------------------------------------------------- Body section ---------------------------------------------------------- */}

        {/*---------------------------------------------------------- Profile Update button section ----------------------------------------------------------*/}
      </ScrollView>
      <View
          style={{
            // borderBottomColor: "black",
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            // borderBottomWidth: 2,
            margin: 10,
          }}
        >
      <CustomButton label={"CONTINUE BROWSING"} />
      </View>
    </SafeAreaView>
  );
};

export default TransactionCompleted;
