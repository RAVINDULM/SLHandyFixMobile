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

import { DataTable } from 'react-native-paper';

function Cus_RecentJob({navigation}) {
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
        
        <DataTable>
        <DataTable.Header>
          <DataTable.Title >ID</DataTable.Title>
          <DataTable.Title >Job Title</DataTable.Title>
          <DataTable.Title >Service Provider</DataTable.Title>
          <DataTable.Title >Date of Job Done</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
       <DataTable.Cell >1</DataTable.Cell>
       <DataTable.Cell >Painting</DataTable.Cell>
       <DataTable.Cell >John Doe</DataTable.Cell>
       <DataTable.Cell >20/08/2022</DataTable.Cell>
     </DataTable.Row>

     <DataTable.Row>
       <DataTable.Cell >2</DataTable.Cell>
       <DataTable.Cell >Plumbing</DataTable.Cell>
       <DataTable.Cell >Jane Doe</DataTable.Cell>
       <DataTable.Cell >10/08/2022</DataTable.Cell>
     </DataTable.Row>

      </DataTable>

        </ScrollView>
    </SafeAreaView>

  )
}

export default Cus_RecentJob