import React from 'react'
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

import {
  Button,
  Avatar,
  Card, 
  Title,
  Chip
} from "react-native-paper";

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


function Cus_JobAD() {
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
                Job Advertisements
              </Text>
          
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <ImageBackground
                  source={require("../../assests/imgs/User01.jpg")}
                  style={{ width: 40, height: 40 }}
                  imageStyle={{ borderRadius: 25 }}
                />
              </TouchableOpacity>
            </View>

{/* ---------------------------------job ad cards------------------------------------------------- */}
           <View style={{ flexDirection: "column" }}>
              <Card style={{ backgroundColor: "#F3F5F7",marginTop:5,borderColor:"black",borderWidth:1}}>
                  <Card.Content>
                      <View style={{ flexDirection: "row" , margin: 1,height:60, justifyContent:'space-between'}}>
                            <View style={{ margin: 1,height:60,width:50}}>
                                  <Avatar.Image
                                    size={50}
                                    source={require("../../assests/imgs/User01.jpg")}/>
                            </View>

                            <View style={{  margin: 1,height:60,width:130,paddingLeft:8}}>
                            <Title>Plumbing work</Title>
                            <Text style={{color:"grey"}}>3 days ago</Text>
                            </View>

                            <View style={{  margin: 1,height:60,width:70}}>
                            <Text style={{marginTop:5}}>(Completed)</Text>
                            </View>
                           
                            <View style={{ margin: 1,height:60,width:30}}>
                              <ImageBackground
                                source={require("../../assests/icons/icons8-menu-vertical-32.png")}
                                style={{ width: 30, height: 30 }}
                              />
                            </View>
                      </View>

                      <View style={{ flexDirection: "row" ,
                                    //  backgroundColor: "green", 
                                     margin: 1,
                                     height:30,  
                                     flexDirection: "row",
                                     alignItems: "center",
                                     paddingLeft:55 }}>
                            <ImageBackground
                              source={require("../../assests/icons/icons8-location-50.png")}
                              style={{ width: 25, height: 25 }}
                              />
                            <Text style={{paddingLeft: 2,
                                          fontSize: 16,
                                          width: 150,}}> Anuradhapura</Text>
                       </View>

                      <View style={{ flexDirection: "row" , 
                                     margin: 1,
                                     height:60,
                                     borderBottomColor: 'black',
                                     borderBottomWidth: 1,}}>
                        <Text>I’m searching experienced plumber for repair my house. 
                                    Please apply if you have experienced that duty.</Text>
                      </View>

                      <View style={{ flexDirection: "row" ,margin: 1,height:30}}>
                            <ImageBackground
                              source={require("../../assests/icons/user.png")}
                              style={{ width: 25, height: 25 ,marginTop:10}}
                              />
                          <CardButton
                            onPress={() => {}}
                            title="Service provider's requests"
                            color="blue"
                          />
                      </View>
                  </Card.Content>
              </Card>
           </View>

           <View style={{ flexDirection: "column" }}>
              <Card style={{ backgroundColor: "#F3F5F7",marginTop:5,borderColor:"black",borderWidth:1}}>
                  <Card.Content>
                      <View style={{ flexDirection: "row" , margin: 1,height:60, justifyContent:'space-between'}}>
                            <View style={{ margin: 1,height:60,width:50}}>
                                  <Avatar.Image
                                    size={50}
                                    source={require("../../assests/imgs/User01.jpg")}/>
                            </View>

                            <View style={{  margin: 1,height:60,width:130,paddingLeft:8}}>
                            <Title>Plumbing work</Title>
                            <Text style={{color:"grey"}}>3 days ago</Text>
                            </View>

                            <View style={{  margin: 1,height:60,width:70}}>
                            <Text style={{marginTop:5}}>(Completed)</Text>
                            </View>
                           
                            <View style={{ margin: 1,height:60,width:30}}>
                              <ImageBackground
                                source={require("../../assests/icons/icons8-menu-vertical-32.png")}
                                style={{ width: 30, height: 30 }}
                              />
                            </View>
                      </View>

                      <View style={{ flexDirection: "row" ,
                                    //  backgroundColor: "green", 
                                     margin: 1,
                                     height:30,  
                                     flexDirection: "row",
                                     alignItems: "center",
                                     paddingLeft:55 }}>
                            <ImageBackground
                              source={require("../../assests/icons/icons8-location-50.png")}
                              style={{ width: 25, height: 25 }}
                              />
                            <Text style={{paddingLeft: 2,
                                          fontSize: 16,
                                          width: 150,}}> Anuradhapura</Text>
                       </View>

                      <View style={{ flexDirection: "row" , 
                                     margin: 1,
                                     height:60,
                                     borderBottomColor: 'black',
                                     borderBottomWidth: 1,}}>
                        <Text>I’m searching experienced plumber for repair my house. 
                                    Please apply if you have experienced that duty.</Text>
                      </View>

                      <View style={{ flexDirection: "row" ,margin: 1,height:30}}>
                            <ImageBackground
                              source={require("../../assests/icons/user.png")}
                              style={{ width: 25, height: 25 ,marginTop:10}}
                              />
                          <CardButton
                            onPress={() => {}}
                            title="Service provider's requests"
                            color="blue"
                          />
                      </View>
                  </Card.Content>
              </Card>
           </View>

           <View style={{ flexDirection: "column" }}>
              <Card style={{ backgroundColor: "#F3F5F7",marginTop:5,borderColor:"black",borderWidth:1}}>
                  <Card.Content>
                      <View style={{ flexDirection: "row" , margin: 1,height:60, justifyContent:'space-between'}}>
                            <View style={{ margin: 1,height:60,width:50}}>
                                  <Avatar.Image
                                    size={50}
                                    source={require("../../assests/imgs/User01.jpg")}/>
                            </View>

                            <View style={{  margin: 1,height:60,width:130,paddingLeft:8}}>
                            <Title>Plumbing work</Title>
                            <Text style={{color:"grey"}}>3 days ago</Text>
                            </View>

                            <View style={{  margin: 1,height:60,width:70}}>
                            <Text style={{marginTop:5}}>(Completed)</Text>
                            </View>
                           
                            <View style={{ margin: 1,height:60,width:30}}>
                              <ImageBackground
                                source={require("../../assests/icons/icons8-menu-vertical-32.png")}
                                style={{ width: 30, height: 30 }}
                              />
                            </View>
                      </View>

                      <View style={{ flexDirection: "row" ,
                                    //  backgroundColor: "green", 
                                     margin: 1,
                                     height:30,  
                                     flexDirection: "row",
                                     alignItems: "center",
                                     paddingLeft:55 }}>
                            <ImageBackground
                              source={require("../../assests/icons/icons8-location-50.png")}
                              style={{ width: 25, height: 25 }}
                              />
                            <Text style={{paddingLeft: 2,
                                          fontSize: 16,
                                          width: 150,}}> Anuradhapura</Text>
                       </View>

                      <View style={{ flexDirection: "row" , 
                                     margin: 1,
                                     height:60,
                                     borderBottomColor: 'black',
                                     borderBottomWidth: 1,}}>
                        <Text>I’m searching experienced plumber for repair my house. 
                                    Please apply if you have experienced that duty.</Text>
                      </View>

                      <View style={{ flexDirection: "row" ,margin: 1,height:30}}>
                            <ImageBackground
                              source={require("../../assests/icons/user.png")}
                              style={{ width: 25, height: 25 ,marginTop:10}}
                              />
                          <CardButton
                            onPress={() => {}}
                            title="Service provider's requests"
                            color="blue"
                          />
                      </View>
                  </Card.Content>
              </Card>
           </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default Cus_JobAD