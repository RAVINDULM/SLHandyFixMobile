import React, { useEffect, useState } from "react";
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
  View,
  Text,
  StatusBar,  
  TouchableOpacity,
} from "react-native";

export default CustomerAdCard=({jobAdds})=>{
    return(
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
                          <Title>{jobAdds.title}</Title>
                          <Text style={{color:"grey"}}>{jobAdds.postDate}</Text>
                          </View>

                          {/* <View style={{  margin: 1,height:60,width:70}}>
                          <Text style={{marginTop:5}}>(Completed)</Text>
                          </View> */}
                         
                          <View style={{ margin: 1,height:60,width:30}}>
                          <TouchableOpacity>
                                <ImageBackground
                                onPress={() => {navigation.navigate("Cus_viewJobAD")}}
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
                          <Text style={{paddingLeft: 2,fontSize: 16,width: 150,}}> {jobAdds.address}</Text>
                     </View>

                     {/* I’m searching experienced plumber for repair my house. 
                                  Please apply if you have experienced that duty. */}
                    <View style={styles.thirdViewtag}>
                      <Text>{jobAdds.description}</Text>
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
      // paddingLeft:55 
    },
  
    thirdViewtag:{
      flexDirection: "row" , 
      margin: 1,
      height:60,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    }
  })