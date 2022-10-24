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

import { Card, Title, Paragraph, Chip } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendar,
  faChevronLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  RadioButton,
  List,
  Checkbox,
  Button,
  Avatar,
  Appbar,
} from "react-native-paper";

//import { DataTable } from 'react-native-paper';

function Cus_RecentJob({ navigation }) {
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
          <Text style={{ fontSize: 18 }}>
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
        <View>
          <Card style={{ backgroundColor: "#F3F5F7" }}>
            <Card.Content>


              <View style={{ flexDirection: "column" }}>
                <View>
                  <Title>Job Title</Title>
                </View>
                <View>
                  <View style={{ flexDirection: "row", backgroundColor: "blue" }}>
                    <View style={{ backgroundColor: "red" }}>
                      <Avatar.Image
                        size={50}
                        source={require("../../assests/imgs/User01.jpg")}
                      // style={{ marginRight: 10, marginLeft: 10 }}
                      />
                    </View>

                    <View  style={{flexDirection:"column",backgroundColor:"white",justifyContent:"center"}}>
                      <Text style={{ fontSize: 20 }}>Service Provider</Text>
                    </View>
                  </View>
                </View>

              </View>
            </Card.Content>
          </Card>
        </View>

      </ScrollView>
    </SafeAreaView>

  )
}

export default Cus_RecentJob

