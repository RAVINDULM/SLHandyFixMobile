import React, { useState } from "react";
// import PhotoUpload from 'react-native-photo-upload'

// import PhoneInput from 'react-phone-number-input'

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

import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { Button, TextInput, Appbar } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'
import DatePicker from 'react-native-datepicker';


function Cus_EditProfile({ navigation }) {

  const [value, setValue] = useState()
  const [selectedValue, setSelectedValue] = useState("district");
  const [selectedCategory, setSelectedCategory] = useState("category");

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // marginTop: ,
          }}
        >
         
        </View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/menu.png")}
              style={{ width: 30, height: 30 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18}}>
            Edit Profile
          </Text>
      
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../assests/imgs/User01.jpg")}
              style={{ width: 40, height: 40 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View> */}


        <View style={styles.content}>

          {/* <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              console.log('Image base64 string: ', avatar)
            }
          }}
        >
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            resizeMode='cover'
            source={{
              uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
            }}
          />
        </PhotoUpload> */}

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
                  style={styles.textinput}
                  mode="outlined"
                  onChangeText={handleChange('firstname')}
                  value={values.firstname}
                  label="First Name"
                  placeholder="Enter your first name..."
                />

                <TextInput
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={handleChange('lastname')}
                  value={values.lastname}
                  label="Last Name"
                  placeholder="Enter your last name..."
                />

                <TextInput
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={handleChange('phonenumber')}
                  value={values.phonenumber}
                  label="Phone Number"
                  placeholder="Enter your phone number..."

                />

                {/* <PhoneInput
                  style={styles.phoneInput}
                  defaultCode="IN"
                 /> */}


                <TextInput
                  style={styles.textinput}
                  onChangeText={handleChange('dateofbirth')}
                  value={values.dateofbirth}
                  label="Date of Birth"
                  placeholder="mm/dd/yyyy"
                />
                

                <TextInput
                  mode="outlined"
                  style={styles.textinput}
                  onChangeText={handleChange('address')}
                  value={values.address}
                  label="Address"
                  placeholder="Enter your address here..."
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

                <View style={styles.buttonview}>
                  <Button onPress={handleChange} style={styles.buttonCancel} color="white">Cancel</Button>
                  <Button onPress={handleSubmit} style={styles.buttonSubmit} color="white">Update</Button>
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
    width: 110,
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: "#2538B8"
  },
  buttonCancel: {
    width: 110,
    marginTop: 26,
    paddingVertical: 10,
    backgroundColor: "silver"
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color: "#000"
  },
  phoneInput: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 2,
    padding: 16
  },
  textinput: {
    borderBottomColor: '#ccc',
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
    
  },
  datepicker:{
    borderBottomColor: '#ccc',
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
    width:290,
    height:60,
  },
  picker: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
    height: 50,
    width: 300,
  },
  buttonview: {
    display: 'flex',
    flexDirection: 'row',
    // width:50,
    justifyContent: 'space-around',
  }
})

export default Cus_EditProfile