import React, { useState } from "react";
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

import {
  Button,
  Avatar,
  Card, 
  Title,
  Chip
} from "react-native-paper";
import { Picker } from '@react-native-picker/picker';

import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
  View,
  Text,
  StatusBar,  
  TouchableOpacity,
} from "react-native";

  const Cus_JobAD = ({ navigation }) => {

  const [selectedValue, setSelectedValue] = useState("all");

  return (
    <SafeAreaView>
        <ScrollView style={{ padding: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // marginTop: 20,
              }}
            />

{/* ---------------------------------job ad cards------------------------------------------------- */}
          <View style={{ flexDirection: "column" }}>
            <View style={{display:'flex'}}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>

              <Picker
                  selectedValue={selectedValue}
                  style={styles.pickertag}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="All" value="d1" />
                  <Picker.Item label="Completed" value="d2" />
                  <Picker.Item label="New" value="d3" />
                  <Picker.Item label="Ongoing" value="d4" />
                </Picker>

                {/* <TouchableOpacity > */}
                  <Button 
                      style={styles.addbutton} color="white" 
                      onPress={() => navigation.navigate("Cus_PostJobAD")}> Add new
                  </Button>
                {/* </TouchableOpacity> */}

              </View>  
            </View>

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
                              <TouchableOpacity onPress={() => navigation.navigate("Cus_viewJobAD")}>
                                  <ImageBackground
                                  source={require("../../assests/icons/icons8-menu-vertical-32.png")}
                                  style={{ width: 30, height: 30 }}
                                />
                              </TouchableOpacity>
                             
                            </View>
                      </View>

                      <View style={styles.secondViewtag}>
                            <ImageBackground
                              source={require("../../assests/icons/icons8-location-50.png")}
                              style={{ width: 25, height: 25 }}
                              />
                            <Text style={{paddingLeft: 2,fontSize: 16, width: 150,}}> Anuradhapura</Text>
                       </View>

                      <View style={styles.thirdViewtag}>
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
                            <TouchableOpacity>
                                  <ImageBackground
                                  onPress={() => {}}
                                  source={require("../../assests/icons/icons8-menu-vertical-32.png")}
                                  style={{ width: 30, height: 30 }}
                                />
                              </TouchableOpacity>
                            </View>
                      </View>

                      <View style={styles.secondViewtag}>
                            <ImageBackground
                              source={require("../../assests/icons/icons8-location-50.png")}
                              style={{ width: 25, height: 25 }}
                              />
                            <Text style={{paddingLeft: 2,fontSize: 16,width: 150,}}> Anuradhapura</Text>
                       </View>

                      <View style={styles.thirdViewtag}>
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
                            <TouchableOpacity>
                                  <ImageBackground
                                  onPress={() => {}}
                                  source={require("../../assests/icons/icons8-menu-vertical-32.png")}
                                  style={{ width: 30, height: 30 }}
                                />
                              </TouchableOpacity>
                            </View>
                      </View>

                      <View style={styles.secondViewtag}>
                            <ImageBackground
                              source={require("../../assests/icons/icons8-location-50.png")}
                              style={{ width: 25, height: 25 }}
                              />
                            <Text style={{paddingLeft: 2,fontSize: 16, width: 150,}}> Anuradhapura</Text>
                       </View>

                      <View style={styles.thirdViewtag}>
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


const styles = StyleSheet.create({
  pickertag: {
    borderBottomColor: '#ccc',
    backgroundColor:"lightgrey",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
    marginTop:5,
    height: 50,
    width: 130,
  },

  addbutton: {
    borderRadius: 5,
    marginTop:5,
    width:120,
    height:50,
    justifyContent:'center',
    backgroundColor: '#2538B8'
  },

  secondViewtag:{
    flexDirection: "row" ,
    margin: 1,
    height:30,  
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:55 
  },

  thirdViewtag:{
    flexDirection: "row" , 
    margin: 1,
    height:60,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})


export default Cus_JobAD