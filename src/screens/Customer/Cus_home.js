import React, { useState } from "react";
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import {
  faCalendar,
  faChevronLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

import { Card, Title, Paragraph, Chip } from "react-native-paper";
import {
  RadioButton,
  List,
  Checkbox,
  Button,
  Avatar,
  Appbar,
  IconButton ,
} from "react-native-paper";


import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

// const optionsPerPage = [2, 3, 4];

const Cus_home = ({ navigation }) => {

  // const [page, setPage] = React.useState<number>(0);
  // const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  // React.useEffect(() => {
  //   setPage(0);
  // }, [itemsPerPage]);

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

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

{/* ---------------------------number cards---------------------------------- */}

      <View style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>

          <View style={styles.mainContainer}>
              <View style={styles.subcontainer}>
                    <Text style={{ fontSize:35,color:'white', marginLeft:15}}>4</Text>
              </View>

              <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>Placed Jobs</Text>
              </View>
          </View>

          <View style={styles.mainContainer}>
              <View style={styles.subcontainer}>
                    <Text style={{ fontSize:35,color:'white', marginLeft:15}}>4</Text>
              </View>

              <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>Accepted Jobs</Text>
              </View>
          </View>

          <View style={styles.mainContainer}>
              <View style={styles.subcontainer}>
                    <Text style={{ fontSize:35,color:'white', marginLeft:15}}>4</Text>
              </View>

              <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>Completed Jobs</Text>
              </View>
          </View> 
      </View>

     
      

{/* ----------------------------------------------------ongoing job cards--------------------------------------------------------- */}
      <View style={{backgroundColor:'lightgrey',paddingTop:10}}>
          
          <View style={{alignItems:'center'}}>
              <Text style={{fontSize: 20,
                        color: "black",
                        fontWeight: '500'}}>Ongoing jobs
              </Text>
          </View>
        <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column",paddingRight:20 }}>
                    <Title>Plumbing work</Title>
                    <Chip
                      onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View>
                        <FontAwesomeIcon icon={faCalendar} size={0} />
                      </View>
                      <Text>12/08/2022</Text>
                    </Chip>
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>John Michelle</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    <Button
                      style={{ marginBottom: 10 ,borderRadius: 5, backgroundColor: 'green'}}
                      color="white"
                    >
                      {" "}
                      New
                    </Button>
                    <Button
                      mode="outlined"
                      onPress={() => console.log("Pressed")}
                    >
                      {" "}
                      View more
                    </Button>
                  </View>
                </View>
              </Card.Content>
            </Card>
        </View>

        <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column",paddingRight:20 }}>
                    <Title>Electrical work</Title>
                    <Chip
                      onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View>
                        <FontAwesomeIcon icon={faCalendar} size={0} />
                      </View>
                      <Text>12/08/2022</Text>
                    </Chip>
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>Jithru Perera</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    <Button
                      style={{ marginBottom: 10 ,borderRadius: 5, backgroundColor: 'goldenrod'}}
                      color="white"
                    >
                      {" "}
                      Ongoing
                    </Button>
                    <Button
                      mode="outlined"
                      onPress={() => console.log("Pressed")}
                    >
                      {" "}
                      View more
                    </Button>
                  </View>
                </View>
              </Card.Content>
            </Card>
        </View>

        <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row"}}>
                  <View style={{ flexDirection: "column" ,paddingRight:20 }}>
                    <Title>Masonary work</Title>
                    <Chip
                      onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View>
                        <FontAwesomeIcon icon={faCalendar} size={0} />
                      </View>
                      <Text>12/08/2022</Text>
                    </Chip>
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>Eric Mic</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    <Button
                      style={{ marginBottom: 10 ,borderRadius: 5, backgroundColor: 'goldenrod'}}
                      color="white"
                    >
                      {" "}
                      ongoing
                    </Button>
                    <Button
                      mode="outlined"
                      onPress={() => console.log("Pressed")}
                    >
                      {" "}
                      View more
                    </Button>
                  </View>
                </View>
              </Card.Content>
            </Card>
        </View>

      </View>
      </ScrollView>
    </SafeAreaView>  
  );
};

    const styles = StyleSheet.create({
      mainContainer: {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'baseline',
        justifyContent:'center',
        width:100,
        height:120,
        backgroundColor: "#F3F5F7", 
        margin: 10,
        elevation:10,
        borderRadius:5
      },

      subcontainer: {
        backgroundColor:'#2538B8',
        borderRadius:25,
        marginBottom:15,
        marginTop:6,
        width:50,
        height:50,
        justifyContent:'center'
      }
    })

export default Cus_home;
