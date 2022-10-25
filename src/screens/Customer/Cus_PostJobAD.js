import React, { useState } from "react";
// import React, {useState, useEffect} from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import utils from "../../utils/config"

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
  selectedValue,
  selectedCategory,
  date,
  Dimensions,
} from "react-native";

import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import Axios from "axios";
import { Button, TextInput, Appbar } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
//import DateTimePicker from '@react-native-community/datetimepicker';


function Cus_PostJobAD({navigation}) {

  // const [selectedCategory, setSelectedCategory] = useState("category");
  const [pickdate, setdatevalue] = useState(new Date());

  console.log(format(pickdate, "MMMM do, yyyy "));
  const onChange = (event, selecteddate) => {
    if (event.type != "dismissed") {
      setdatevalue(selecteddate);
    }
  }

  const showdatepicker = () => {
    DateTimePickerAndroid.open({
      onChange,
      value: new Date(),
      minimumDate: new Date(),
      mode: "date"
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <ScrollView style={{ paddingLeft: 20, paddingRight: 20,paddingBottom: 20, }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // marginTop: 20,
          }}/>

        <View style={styles.content}>

                <Formik
                  initialValues={{ title: "", description: "", dueDate: "", address: "" , image: ""}}
                      onSubmit={(values) => {
                          console.log(values); 
                          Axios.post(utils.api+"/customer/addNewAdvertisement", {
                          title: values.title,
                          description: values.description, 
                          dueDate: pickdate, 
                          address: values.address, 
                          image: values.image,
                          serviceProviderId:1,
                          customerId:1,
                          status:0,
                          }).then(() => {
                          alert("successfully added!");
                          navigate("Cus_PostJobAD") 
                          });
                      }}
                >
            {({ handleChange, handleSubmit,resetForm, values, errors }) => (
              <View>
                <TextInput 
                  style= {styles.textinput}
                  onChangeText={handleChange('title')}
                  value={values.title}
                  label="Title"
                  mode="outlined"
                  placeholder="Enter your job title..."
                />
                
                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  label="Job Description"
                  mode="outlined"
                  placeholder="Enter your job details here..."
                />

              <TouchableOpacity onPress={showdatepicker}>
                  <TextInput
                    disabled
                    style={styles.textinput}
                    value={format(pickdate, "MMMM do, yyyy ")}
                    label="Required Date"
                    mode="outlined"
                    placeholder="mm/dd/yyyy"
                  />
                </TouchableOpacity>

                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('address')}
                  value={values.address}
                  label="Address"
                  mode="outlined"
                  placeholder="Enter the address where you want the job to occur..."
                />

                 <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('image')}
                  value={values.image}
                  label="Image"
                  mode="outlined"
                  placeholder="Enter a photo"
                />

                {/* <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="District" value="d1" />
                  <Picker.Item label="Matara" value="d2" />
                  <Picker.Item label="Galle" value="d3" />
                  <Picker.Item label="Hambantota" value="d4" />
                  <Picker.Item label="Colombo" value="d5" />
                </Picker> */}



                {/* <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('image')}
                  value={values.requireddate}
                  label="Choose Image"
                  mode="outlined"
                /> */}

        {/* <View style={styles.container}>
              <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
            
              <Text style={{color: '#888', fontSize: 18}}> 
                To share a photo from your phone with a friend, just press the button below!
              </Text>
            </View>                                            */}

              

                <View style={styles.buttonview}>
                    <Button onPress={resetForm} style={styles.buttonCancel} color="white" >Cancel</Button>
                    <Button onPress={handleSubmit} style={styles.buttonSubmit} color="white">Post</Button>
                    
                </View>
                
              </View>
            )}
          </Formik>        
          </View>

        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 16,
  },
  buttonSubmit: {
    width:110,
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: "#2538B8"
  },
  buttonCancel: {
    width:110,
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: "silver"
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color : "#000"
  },
  textinput: {
        borderBottomColor: '#ccc',
        backgroundColor:"#fff",
        borderBottomWidth: 1,
        paddingBottom: 3,
        marginBottom: 10,
  },
  picker: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 3,
        marginBottom: 10,
        height: 50,
        width: 300,
  },
  datePickerStyle: {
    width: 230,
  },
  buttonview :{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  }

})

export default Cus_PostJobAD