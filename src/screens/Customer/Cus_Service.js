import React from 'react'
import { Searchbar } from 'react-native-paper';

import {
  faCalendar,
  faChevronLeft,
  faClock,
  faLocationDot,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

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




function Cus_Service({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

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
                  <View style={{ flexDirection: "column" }}>
                    <Title>Namal Perera</Title>
                    <Paragraph>
                      Plumber|Member since 2015 {'\n'} 
                      No30, Mahawela Road, Galle. {'\n'} 
                    </Paragraph>
                    {/* <View style={{ flexDirection: "row" }}>
                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5, marginRight: 10 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faLocationDot} size={0} />
                        </View>
                        <Text>Location</Text>
                      </Chip>
                      <Chip
                        onPress={() => console.log("Pressed date")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faCalendar} size={0} />
                        </View>
                        <Text>12/08/2022</Text>
                      </Chip>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>John doe</Text>

                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5, marginRight: 10 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faClock} size={0} />
                        </View>
                        <Text>10.47 pm</Text>
                      </Chip>
                    </View> */}
                  </View>
 {/* ---------------------- rating component  --------------------------------*/}
                  {/* <Card
          style={{
            margin: 10,
            borderRadius: 10,
            // backgroundColor: "#F3F5F7"
          }}
        >
          <Card.Content> */}
            
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
                    {/* <Button
                      style={{ marginBottom: 10 }}
                      mode="outlined"
                      onPress={() => setVisible(true)}
                    >
                      {" "}
                      Accept{" "}
                    </Button> */}
                    <Button
                      style={{ marginBottom: 10 }}
                      mode="outlined"
                      onPress={() => console.log("")}
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