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

const ServPro_Profile = ({ navigation }) => {
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
        {/*---------------------------------------------------------- Profile picture section -----------------------------------------------------------------------------------*/}
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            // ,backgroundColor: 'blue'
            paddingTop: 50,
          }}
        >
          <ImageBackground
            source={require("../../assests/imgs/User01.jpg")}
            style={{ width: 120, height: 120, }}
            imageStyle={{ borderRadius: 60 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingLeft: 30,
              // backgroundColor: 'red'
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                paddingRight: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Saman Bandara
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "250" }}>
                Painter/Carpenter
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // ,backgroundColor: 'white'
              }}
            >
              <ImageBackground
                source={require("../../assests/icons/icons8-edit-30.png")}
                style={{ width: 25, height: 25, }}
              />
            </View>
          </View>
        </View>
        {/*---------------------------------------------------------- Profile picture section ---------------------------------------------------------- */}

        {/*---------------------------------------------------------- Profile details heading section---------------------------------------------------------- */}
        <View style={{ paddingTop: 20, paddingBottom: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>PROFILE</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        />
        {/*---------------------------------------------------------- Profile details heading section ----------------------------------------------------------*/}

        {/* ----------------------------------------------------------Profile details section ----------------------------------------------------------*/}
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
          >
            User Name
          </Text>
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          />
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
            source={require("../../assests/icons/icons8-call-30.png")}
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
          >
            Contact
          </Text>
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          />
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
            source={require("../../assests/icons/icons8-location-50.png")}
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
          >
            Location
          </Text>
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          />
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
            source={require("../../assests/icons/icons8-location-50.png")}
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
          >
            Location
          </Text>
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          />
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
            source={require("../../assests/icons/icons8-location-50.png")}
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
          >
            Location
          </Text>
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          />
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
            source={require("../../assests/icons/icons8-location-50.png")}
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
          >
            Location
          </Text>
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          />
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
            source={require("../../assests/icons/icons8-location-50.png")}
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
          >
            Location
          </Text>
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 25, fontSize: 16, width: 150 }}
          />
        </View>
        
{/*            
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  <Text>Centered text</Text>
</View> */}

        {/*---------------------------------------------------------- Profile details section ----------------------------------------------------------*/}

        {/*---------------------------------------------------------- Profile Update button section ----------------------------------------------------------*/}
        
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
      <CustomButton label={"Update Profile"} />
      </View>
    </SafeAreaView>
  );
};

export default ServPro_Profile;
