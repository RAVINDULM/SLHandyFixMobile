import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert, 
  Modal, 
  Pressable
} from "react-native";
import { Button } from "react-native-paper";

const Cus_spProfileView = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 10,
      }}
    >
      
      <ScrollView style={{ padding: 20 }}>
        {/*---------------------------------------------------------- Profile picture section -----------------------------------------------------------------------------------*/}
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            // paddingTop: 50,
          }}
        >
          <ImageBackground
            source={require("../../assests/imgs/User01.jpg")}
            style={{ width: 120, height: 120 }}
            imageStyle={{ borderRadius: 60 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingLeft: 30,
              // backgroundColor: 'red'
            }}
          >
            <View style={{
                flexDirection: "column",
                alignItems: "center",
                paddingRight: 10,
              }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Saman Bandara
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "250" }}>
                Painter/Carpenter
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // ,backgroundColor: 'white'
              }}
            >
                {/* ------service provider's calendar--------- */}
                <TouchableOpacity>
                    <ImageBackground
                        source={require("../../assests/icons/icons8-calendar-100.png")}
                        style={{ width: 25, height: 25 }} />
                </TouchableOpacity>


                {/* <TouchableOpacity onPress={showdatepicker}>
                  <TextInput
                    disabled
                    style={styles.textinput}
                    value={format(pickdate, "MMMM do, yyyy ")}
                    label="Required Date"
                    mode="outlined"
                    placeholder="mm/dd/yyyy"
                  />
                </TouchableOpacity> */}

              
            </View>
          </View>
        </View>

        {/*---------------------------------------------------------- Profile details heading section---------------------------------------------------------- */}
        <View style={{ paddingTop: 20, paddingBottom: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>PROFILE</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        />
        
        {/* ----------------------------------------------------------Profile details section ----------------------------------------------------------*/}
        <View style={styles.viewtagOfText} >
            <ImageBackground
                source={require("../../assests/icons/user.png")}
                style={{ width: 30, height: 30 }}
            />
            <Text style={styles.textTag}>Saman Bandara</Text>
        </View>

        <View style={styles.viewtagOfText} >
            <ImageBackground
                source={require("../../assests/icons/icons8-call-30.png")}
                style={{ width: 30, height: 30 }}
            />
            <Text style={styles.textTag}>0705432134</Text>
        </View>

         <View style={styles.viewtagOfText}>
          <ImageBackground
            source={require("../../assests/icons/icons8-location-50.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.textTag}> Anuradhapura</Text>
        </View>

        <View style={styles.viewtagOfText}>
          <ImageBackground
            source={require("../../assests/icons/icons8-rate-100.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.textTag}> Ratings</Text>
        </View>

  
        {/*---------------------------------------------------------- Profile Update button section ----------------------------------------------------------*/}
      </ScrollView>

      {/* <View style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
           
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>RATE</Text>
            </Pressable>
      </View> */}


    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textTag: {
        paddingLeft: 20,
        fontSize: 16,
        // fontWeight: "bold",
        width: 150,
    },
    viewtagOfText: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
    },
    buttontag: {
      width:130,
      height:50,
      justifyContent:'center',
      backgroundColor: "#2538B8"
    },


    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius:4,
      elevation: 2,
      width:130,
      height:50,
      justifyContent:'center',
    },
    buttonOpen: {
      backgroundColor: "#2538B8",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  })


export default Cus_spProfileView;