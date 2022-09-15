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
        
        {/* <DataTable>
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

      </DataTable> */}

      {/* ----------------------------------Adding the table as cards-------------------------------------------------------- */}
{/* One card reprent a row in the table, starting row */}
      <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column" }}>
                 
                  <Title>ID</Title>
                   
                    {/* <Text>Location : Seeduwa</Text> */}
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>Service Provider</Text>
                    </View>
                    <Chip
                      onPress={() => console.log("Pressed location")}
                      style={{ marginBottom: 5 }}
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
                      <Text>Date the job placed</Text>
                    </Chip>

                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    {/* <Button
                      style={{ marginBottom: 10 }}
                      mode="outlined"
                      onPress={() => setVisible(true)}
                    >
                      {" "}
                      Accept{" "}
                    </Button>
                    <Button
                      style={{ marginBottom: 10 }}
                      mode="outlined"
                      onPress={() => console.log("")}
                    >
                      {" "}
                      Reject
                    </Button> */}
                     <Title>Job Title</Title>
                    
                     <Chip
                      onPress={() => console.log("Job Status")}
                      style={{ marginBottom: 5, backgroundColor: "grey" }}
                    >
                      
                      <Text>Job Status</Text>
                    </Chip>

                    <Button
                      mode="outlined"
                      onPress={() => console.log("Pressed")}
                    >
                      {" "}
                    Change 
                    </Button>
                  </View>
                </View>
              </Card.Content>
            </Card>
            </View>
{/* -------------------------------------Ending  row -----------------------------------------------------------------------*/}
{/* One card reprent a row in the table, starting row */}
<View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column" }}>
                 
                  <Title>01</Title>
                   
                    {/* <Text>Location : Seeduwa</Text> */}
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>Ihone Doe</Text>
                    </View>
                    <Chip
                      onPress={() => console.log("Pressed location")}
                      style={{ marginBottom: 5 }}
                    >
                      <View>
                        <FontAwesomeIcon icon={faLocationDot} size={0} />
                      </View>
                      <Text>Mirissa</Text>
                    </Chip>
                    <Chip
                      onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View>
                        <FontAwesomeIcon icon={faCalendar} size={0} />
                      </View>
                      <Text>2022/07/12</Text>
                    </Chip>

                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
          
                     <Title>Plumbing</Title>
                    
                     <Chip
                      onPress={() => console.log("Job Status")}
                      style={{ marginBottom: 5, backgroundColor: "orange" }}
                    >
                      
                      <Text>Ongoing</Text>
                    </Chip>

                    <Button
                      mode="outlined"
                      onPress={() => console.log("Pressed")}
                    >
                      {" "}
                    Change 
                    </Button>
                  </View>
                </View>
              </Card.Content>
            </Card>
            </View>
{/* -------------------------------------Ending  row -----------------------------------------------------------------------*/}
{/* One card reprent a row in the table, starting row */}
<View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column" }}>
                 
                  <Title>02</Title>
                   
                    {/* <Text>Location : Seeduwa</Text> */}
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>Larry Jone</Text>
                    </View>
                    <Chip
                      onPress={() => console.log("Pressed location")}
                      style={{ marginBottom: 5 }}
                    >
                      <View>
                        <FontAwesomeIcon icon={faLocationDot} size={0} />
                      </View>
                      <Text>Colombo</Text>
                    </Chip>
                    <Chip
                      onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View>
                        <FontAwesomeIcon icon={faCalendar} size={0} />
                      </View>
                      <Text>2022/07/10</Text>
                    </Chip>

                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
          
                     <Title>Painting</Title>
                    
                     <Chip
                      onPress={() => console.log("Job Status")}
                      style={{ marginBottom: 5, backgroundColor: "green" }}
                    >
                      
                      <Text>Completed</Text>
                    </Chip>

                    <Button
                      mode="outlined"
                      onPress={() => console.log("Pressed")}
                    >
                      {" "}
                    Change 
                    </Button>
                  </View>
                </View>
              </Card.Content>
            </Card>
            </View>
{/* -------------------------------------Ending  row -----------------------------------------------------------------------*/}
        </ScrollView>
    </SafeAreaView>

  )
}

export default Cus_RecentJob

