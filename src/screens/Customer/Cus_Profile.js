import React from 'react'

import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,  
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Avatar } from 'react-native-paper';
import { Button } from 'react-native-paper';



  
function Cus_Profile({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <ScrollView style={{ padding: 20 }}>
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
          <Text style={{ fontSize: 18}}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/User01.jpg")}
              style={{ width: 40, height: 40 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.view}>

        <Avatar.Image size={125} align={"center"}  source={require("../../assests/imgs/User01.jpg")} />

        </View> 
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Edit Profile
  </Button>    

        </ScrollView>
    </SafeAreaView>

  )
}

export default Cus_Profile

const styles = StyleSheet.create ({
	view : {
	  flexDirection: "row",
      marginTop : 50,
      marginLeft : 100
	},
  //no change here
 	img: {
    marginRight : 25
 	}
})