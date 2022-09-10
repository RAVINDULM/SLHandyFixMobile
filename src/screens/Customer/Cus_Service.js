import React from 'react'
import { Searchbar } from 'react-native-paper';

import {
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,  
  TouchableOpacity,
  Dimensions,
} from "react-native";


function Cus_Service({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
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
            My Services
          </Text>
      
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/User01.jpg")}
              style={{ width: 40, height: 40 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <Searchbar
            // icon="camera"
            placeholder="Search Category"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />

      </ScrollView>

        
    </SafeAreaView>
  )
}

export default Cus_Service