import React, { useEffect, useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";

import axios from "axios";



const Cus_Profile = ({ navigation }) => {

const[posts, setPosts] = useState([]);
console.log("mobile prorfile")
const id = 1;
useEffect(() => {

  console.log("get customers called");
  axios.get("https://10.22.163.170:5000/api/v1/customer/getSingleCustomer/"+ id)
  .then((res) => {
    setPosts(res.data);
    })
    .catch ((err) => {
    console.log(err);
    });
    });



  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 10,
      }}
    >

      <ScrollView style={{ padding: 20 }}>
        {/*---------------------------------------------------------- Profile picture section -----------------------------------------------------------------------------------*/}
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={require("../../assests/imgs/avatar.jpg")}
            style={{ width: 120, height: 120 }}
            imageStyle={{ borderRadius: 60 }}
            
          />
          <View
            style={{
             
              flexDirection: "row",
              justifyContent: "center",
              alignItems:"center",
              paddingLeft: 30,
            }}
          >
            <View
              style={{
               
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 30,
                // backgroundColor: 'black'
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }} >
                Enuli Diaz
              </Text>
            
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            </View>
          </View>
        </View>
        {/*---------------------------------------------------------- Profile picture section ---------------------------------------------------------- */}

        {/*---------------------------------------------------------- Profile details heading section---------------------------------------------------------- */}
        <View style={{ paddingTop: 20, paddingBottom: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>PROFILE</Text>
        </View>
        
  <View>

    {/*--{posts.map((posts) => ()--*/}

        
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        />
        {/*---------------------------------------------------------- Profile details heading section ----------------------------------------------------------*/}

        {/* ----------------------------------------------------------Profile details section ----------------------------------------------------------*/}
        
            {/*--{posts.map((posts) => ()--*/}

        <View
          style={{
            flexDirection: "row",
            // justifyContent: 'center',
            alignItems: "center",
            marginTop: 16,
            margin:10,
            // backgroundColor: 'green'
          }}
        >
          <ImageBackground
            source={require("../../assests/icons/user.png")}
            style={{ width: 30, height: 30 }}
            // imageStyle={{ borderRadius: 25 }}
          />
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
              width: 150,

            }}
            // key ={posts.id} 
             
          >
            Enuli
            {/* {posts.name} */}
          </Text>
  
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
          }}
        >
          <ImageBackground
            source={require("../../assests/icons/icons8-call-30.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
              width: 150,
            }}
          >
            0716248232
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
          }}
        >
          <ImageBackground
            source={require("../../assests/icons/icons8-location-50.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
              width: 250,
            }}
          >
            28, Pahala Karagahamuna, Kadawatha.
          </Text>
          {/* <TextInput
            placeholder="Address"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          /> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: 'center',
            alignItems: "center",
            margin: 10,
            // backgroundColor: 'green'
          }}
        >
          <ImageBackground
            source={require("../../assests/icons/icons8-mail-30.png")}
            style={{ width: 30, height: 30 }}
            // imageStyle={{ borderRadius: 25 }}
          />
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 15,
              fontWeight: "bold",
             // width: 50,
            }}
          >
            Enuli@gmail.com
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            // justifyContent: 'center',
            alignItems: "center",
            margin: 10,
            // backgroundColor: 'green'
          }}
        >
          <ImageBackground
            source={require("../../assests/icons/icons8-security-pass-24.png")}
            style={{ width: 30, height: 30 }}
            // imageStyle={{ borderRadius: 25 }}
          />
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 15,
              fontWeight: "bold",
             // width: 50,
            }}
          >
            NIC
          </Text>
        </View>
          


  </View>

      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          margin: 10,
        }}
      >
        <CustomButton label={"Edit Profile"} onPress={() => navigation.navigate("Cus_EditProfile")}/>
      </View>
    </SafeAreaView>
  );
};

export default Cus_Profile;
