import React from 'react'
import { Searchbar } from 'react-native-paper';

import {
  faCalendar,
  faChevronLeft,
  faClock,
  faLocationDot,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Icon from 'react-native-ionicons';

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
  selectedCategory,
  selectedLocation,
  Dimensions,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { Card, Title, Paragraph, Chip } from "react-native-paper";
import {
  RadioButton,
  List,
  Checkbox,
  Button,
  Avatar,
  Appbar,
} from "react-native-paper";

import { Rating, AirbnbRating } from "react-native-ratings";
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import  Axios  from 'axios';




function Cus_Service({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

  const [serviceprovider, setJsetserviceprovider] = useState([]);

  useEffect(() => {
    // 10.22.163.187:5000/api/v1/
    console.log("get jobs called");
    
      Axios.get("http://10.22.166.206:5000/api/v1/customer1/getserviceproviderlist")
      .then((res) => {
        console.log(res.data);
        setJsetserviceprovider(res.data);
        // setJobid(res.data.jobId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20, marginBottom: 10 }}>
        <Searchbar
          icon={() => <Ionicons name="search-outline" size={30} />}
          placeholder="Search Service Provider"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <Picker
          selectedCategory={selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Category" value="c1" />
          <Picker.Item label="Plumber" value="c2" />
          <Picker.Item label="Mason" value="c3" />
          <Picker.Item label="Eleectrician" value="c4" />
          <Picker.Item label="Carpenter" value="c5" />
          <Picker.Item label="Painter" value="c6" />
        </Picker>

        <Picker
          selectedCategory={selectedLocation}
          style={styles.picker}

          onValueChange={(itemValue, itemIndex) => setselectedLocation(itemValue)}
        >
          <Picker.Item label="Location" value="c1" />
          <Picker.Item label="Anuradhapura" value="c2" />
          <Picker.Item label="Colombo" value="c3" />
          <Picker.Item label="Galle" value="c4" />
          <Picker.Item label="Matara" value="c5" />
          <Picker.Item label="Mirissa" value="c6" />

        </Picker>


        {/* ---------------------- card fo a service  --------------------------------*/}
        
      { serviceprovider.map((serviceprovider)=>(
        <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
          {/* <Card.Cover */}
          <Avatar.Image

            source={require("../../assests/imgs/User01.jpg")}
            // style={{ marginBottom: 10 }}
            style={{ marginRight: 100, marginLeft: 100 }}
            size={100}
          />
          <Card.Content>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "column",alignItems:"center" }}>
                <Title key={serviceprovider.serviceproviderId}>{serviceprovider.firstName +" "+serviceprovider.lastName}</Title>
                <Paragraph key={serviceprovider.serviceproviderId}>
                  {serviceprovider.qualification+" \n"+serviceprovider.yearsOfExperience+" Years of experience "}
                </Paragraph>
 
              </View>
              {/* ---------------------- rating component  --------------------------------*/}

              {/* <Card.Cover></Card.Cover> */}
              <View style={{ marginRight: 35 }} isDisabled={true}>
                <Rating
                  showRating
                  isDisabled={false}
                  // ratingContainerStyle={{
                  //   backgroundColor: "yellow",
                  //   padding: 10,
                  // }}
                  onFinishRating={ratingCompleted}
                  style={{ paddingVertical: 10 }}
                />
              </View>
              {/* </Card.Content>
        </Card> */}
              <Text>Job Count (5)</Text>


              <View
                style={{
                  flexDirection: "column",
                  paddingLeft: 20,
                  marginTop: 20,
                }}
              >

                <Button
                  style={{ marginBottom: 10 }}
                  mode="outlined"
                  onPress={() => { navigation.navigate('Service Provider Profile') }}
                >
                  {" "}
                  View more

                </Button>
                <Button
                  mode="outlined"
                  onPress={() => navigation.navigate("Cus_PlaceJobs")}
                >
                  {" "}
                  Place Your Job
                </Button>
              </View>
            </View>
          </Card.Content>
        </Card>
      ))
     
      }

        {/* -------------------------ending of one card------------------------ */}

      </ScrollView>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  picker: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
    height: 50,
    width: 300,
  }

})

export default Cus_Service