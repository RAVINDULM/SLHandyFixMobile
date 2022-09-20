// import React from 'react'
import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { Button, TextInput, Appbar } from 'react-native-paper';

function Cus_PlaceJobs({navigation} ) {

  const [selectedValue, setSelectedValue] = useState("district");
  const [selectedCategory, setSelectedCategory] = useState("category");

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
            Place job 
          </Text>
      
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/User01.jpg")}
              style={{ width: 40, height: 40 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>


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
                  placeholder="Enter your job title..."
                />

                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('requireddate')}
                  value={values.requireddate}
                  label="Required Date"
                  placeholder="mm/dd/yyyy"
                />
                
                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  label="Job description"
                  placeholder="Enter your job details here..."
                />

                <TextInput
                  style= {styles.textinput}
                  onChangeText={handleChange('location')}
                  value={values.location}
                  label="Location"
                  placeholder="Enter the address where you want the job to occur..."
                />

                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="District" value="d1" />
                  <Picker.Item label="Matara" value="d2" />
                  <Picker.Item label="Galle" value="d3" />
                  <Picker.Item label="Hambantota" value="d4" />
                  <Picker.Item label="Colombo" value="d5" />
                </Picker>

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

                <View style={styles.buttonview}>
                    <Button onPress={handleChange} style={styles.buttonCancel} color="white">Cancel</Button>
                    <Button onPress={handleSubmit} style={styles.buttonSubmit} color="white">Submit</Button>  
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
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 16,
  },
  buttonSubmit: {
    width:140,
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: "#2538B8"
  },
  buttonCancel: {
    width:140,
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
  buttonview :{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  }
})

export default Cus_PlaceJobs