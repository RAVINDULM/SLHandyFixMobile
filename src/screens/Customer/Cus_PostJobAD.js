import React, { useState } from "react";

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
import { Button, TextInput, Appbar } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
//import DateTimePicker from '@react-native-community/datetimepicker';

function Cus_PostJobAD({navigation}) {
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
            initialValues={{ title: '' }} 
            // validate={values => {
            //   let errors = {};
            //   if (!values.email) {
            //     errors.email = 'Required';
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = 'Invalid email address';
            //   }
            //   return errors;
            // }}
            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }
          >
            {({ handleChange, handleSubmit, values, errors }) => (
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

                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('duedate')}
                  value={values.requireddate}
                  label="Due Date"
                  placeholder="DD/MM/YYYY"
                />
{/* 
    <View style={styles.container}>
        <Text style={styles.title}>
          Due Date – 
        </Text>
        <DateTimePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View> */}

                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('address')}
                  value={values.location}
                  label="Address"
                  mode="outlined"
                  placeholder="Enter the address where you want the job to occur..."
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
                <Picker
                  selectedCategory={selectedCategory}
                  
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
                >
                  <Picker.Item label="Category" value="c1" enabled={false} />
                  <Picker.Item label="Plumber" value="c2" />
                  <Picker.Item label="Mason" value="c3" />
                  <Picker.Item label="Eleectrician" value="c4" />
                  <Picker.Item label="Carpenter" value="c5" />
                  <Picker.Item label="Painter" value="c6" />
                </Picker>

                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('image')}
                  value={values.requireddate}
                  label="Choose Image"
                  mode="outlined"
                />

        {/* <View style={styles.container}>
              <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
            
              <Text style={{color: '#888', fontSize: 18}}> 
                To share a photo from your phone with a friend, just press the button below!
              </Text>
            </View>                                            */}

              

                <View style={styles.buttonview}>
                    <Button onPress={handleChange} style={styles.buttonCancel} color="white" >Cancel</Button>
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