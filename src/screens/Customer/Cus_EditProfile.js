import React, { useState } from "react";
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
// import { format } from "date-fns";
import { Avatar } from "react-native-paper";
// import axios from "axios";
import Axios from "axios";

// import PhotoUpload from 'react-native-photo-upload'

import {
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import { Button, TextInput, Appbar } from "react-native-paper";
import PhoneInput from "react-native-phone-input";
import DatePicker from "react-native-datepicker";

function Cus_EditProfile({ navigation }) {
  const [value, setValue] = useState();
  // const [selectedValue, setSelectedValue] = useState("district");
  const [selectedCategory, setSelectedCategory] = useState("category");

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.content}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              contactNo: "",
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              Axios.put(
                "http://10.22.163.170:5000/api/v1/customer/editProfile",
                {
                  id: 1,
                  firstName: values.firstName,
                  lastName: values.lastName,
                  contactNo: values.contactNo,
                  // address: values.address,
                  email: values.email,
                }
              ).then(() => {
                alert("successfully added!");
                navigate("Cus_Profile");
              });
            }}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <TextInput
                  style={styles.textinput}
                  mode="outlined"
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                  label="First Name"
                  placeholder="Enter your first name..."
                />

                <TextInput
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={handleChange("lastName")}
                  value={values.lastName}
                  label="Last Name"
                  placeholder="Enter your last name..."
                />

                <TextInput
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={handleChange("contactNo")}
                  value={values.contactNo}
                  label="Contact Number"
                  placeholder="Enter your Contact Number..."
                />

                <TextInput
                  style={styles.textinput}
                  mode="outlined"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  label="Email"
                  placeholder="email"
                />

                <View style={styles.buttonview}>
                  <Button
                    onPress={handleChange}
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
                    Update
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
  phoneInput: {
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 2,
    padding: 16,
  },
  textinput: {
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
  },
  datepicker: {
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
    width: 290,
    height: 60,
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
    // width:50,
    justifyContent: "space-around",
  },
});

export default Cus_EditProfile;
