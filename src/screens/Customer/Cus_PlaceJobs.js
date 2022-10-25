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

import { Picker } from "@react-native-picker/picker";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { Button, TextInput, Appbar } from "react-native-paper";
import { clockRunning } from "react-native-reanimated";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import * as Location from "expo-location";
import { useEffect } from "react";
import utils from "./../../utils/config";

function Cus_PlaceJobs({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pickdate, setdatevalue] = useState(new Date());
  const [location, setLocation] = useState(null);

  console.log(pickdate);

  const onChange = (event, selecteddate) => {
    if (event.type != "dismissed") {
      setdatevalue(selecteddate);
    }
  };

  const showdatepicker = () => {
    DateTimePickerAndroid.open({
      onChange,
      value: new Date(),
      minimumDate: new Date(),
      mode: "date",
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // useEffect(() => {
  //   console.log("location", location)
  // }, [location])

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

        <View style={styles.content}>
          <Formik
            initialValues={{
              title: "",
              requireddate: "",
              description: "",
              location: "",
              district: "",
              category: "",
            }}
            onSubmit={(values) => {
              // console.log(selectedValue);

              // console.log(selectedCategory);
              // console.log("Function called", values);
              Axios.post(utils.api + "/customer1/submitJobRequest", {
                title: values.title,
                requiredDate: pickdate,
                description: values.description,
                location:
                  location != null
                    ? location.coords.longitude + " " + location.coords.latitude
                    : null,
                district: selectedValue,
                category: selectedCategory,
                customerId: 1,
                serviceProviderId: 1,
                status: 1,
                image: "gggg",
              }).then((response) => {
                if (response.data.error) {
                  alert(response.data.error);
                } else {
                  alert("Your request has been sent successfully!");
                  navigation.navigate("Cus_Service");
                }
              });
            }}
          >
            {({ handleChange, handleSubmit, values, errors, resetForm }) => (
              <View>
                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange("title")}
                  value={values.title}
                  label="Title"
                  mode="outlined"
                  placeholder="Enter your job title..."
                />
                {/* <Button onPress={showdatepicker} style={styles.buttonCancel} color="white">Cancel</Button> */}
                {/* <button onPress={()=>{showdatepicker()}}><Text>asdfgh</Text></button> */}
                <TouchableOpacity onPress={showdatepicker}>
                  <TextInput
                    disabled
                    style={styles.textinput}
                    // onChangeText={handleChange('requireddate')}
                    value={format(pickdate, "MMMM do, yyyy ")}
                    label="Required Date"
                    mode="outlined"
                    placeholder="mm/dd/yyyy"
                  />
                </TouchableOpacity>

                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange("description")}
                  value={values.description}
                  label="Job description"
                  mode="outlined"
                  placeholder="Enter your job details here..."
                />

                {console.log(
                  location != null ? location.coords : "",
                  "cvbghnjkl"
                )}

                <TextInput
                  disabled
                  style={styles.textinput}
                  value={
                    location != null
                      ? location.coords.longitude +
                        " " +
                        location.coords.latitude
                      : null
                  }
                  label="Location"
                  mode="outlined"
                />

                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                >
                  <Picker.Item label="District" enabled={false} />
                  <Picker.Item label="Matara" value="Matara" />
                  <Picker.Item label="Galle" value="Galle" />
                  <Picker.Item label="Hambantota" value="Hambantota" />
                  <Picker.Item label="Colombo" value="Colombo" />
                </Picker>

                <Picker
                  selectedValue={selectedCategory}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedCategory(itemValue)
                  }
                >
                  <Picker.Item label="Category" enabled={false} />
                  <Picker.Item label="Plumber" value="Plumber" />
                  <Picker.Item label="Mason" value="Mason" />
                  <Picker.Item label="Electrician" value="Electrician" />
                  <Picker.Item label="Carpenter" value="Carpenter" />
                  <Picker.Item label="Painter" value="Painter" />
                </Picker>

                <View style={styles.buttonview}>
                  <Button
                    onPress={resetForm}
                    style={styles.buttonCancel}
                    color="white"
                  >
                    Cancel
                  </Button>
                  <Button
                    onPress={handleSubmit}
                    style={styles.buttonSubmit}
                    color="white"
                  >
                    Submit
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  content: {
    padding: 16,
  },
  buttonSubmit: {
    width: 110,
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: "#2538B8",
  },
  buttonCancel: {
    width: 110,
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: "silver",
  },
  text: {
    textAlign: "left",
    width: 230,
    fontSize: 16,
    color: "#000",
  },
  textinput: {
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
  },
  picker: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
    height: 50,
    width: 300,
  },
  buttonview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Cus_PlaceJobs;
