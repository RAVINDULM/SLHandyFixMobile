import React from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Button,
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

            <Card style={{borderWidth:1, borderColor:'black'}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <View style={{display:'flex',flexDirection:'row'}}>
                                  <View style={{width:50, marginLeft:5,marginTop:15}}>
                                        <ImageBackground
                                          source={require("../../assests/imgs/User01.jpg")}
                                          style={{ width: 40, height: 40 }}
                                          imageStyle={{ borderRadius: 25 }}
                                        />
                                  </View>
                                  <View style={{backgroundColor:"yellow"}}><CardTitle 
                                          title="Plumber" 
                                          subtitle="1 day ago"
                                        /></View>
                                      
                                        
                            </View>
                              <View style={{width:265}}>
                                {/* <Card> */}
                                    {/* <CardImage 
                                      source={{uri: 'http://placehold.it/480x270'}} 
                                      title="Above all i am here"
                                    /> */}
                                    {/* <CardTitle 
                                      title="Plumber" 
                                      subtitle="1 day ago"
                                    /> */}
                                     <ImageBackground
                                        source={require("../../assests/imgs/option.png")}
                                        style={{ width: 30, height: 30 }}
                                        imageStyle={{ borderRadius: 25 }}
                                      />
                                    <Text style={{paddingLeft:15}}>Matara</Text>

                                    {/* <CardContent text="Matara"></CardContent> */}
                                    <CardContent text="I’m searching experienced plumber for repair my house. 
                                    Please apply if you have experienced that duty." />
                              </View>
                        </View>

                        <CardAction 
                          separator={true} 
                          inColumn={false}>
                          <CardButton
                            onPress={() => {}}
                            title="Service provider's requests"
                            color="blue"
                          />
                        </CardAction>
            </Card>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cus_JobAD