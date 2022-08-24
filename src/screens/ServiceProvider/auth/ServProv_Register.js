import * as React from "react";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import {
  RadioButton,
  List,
  Checkbox,
  Button,
  Avatar,
  Appbar,
} from "react-native-paper";
// import Multiselect from "multiselect-react-dropdown";
// import DatePicker from 'react-native-date-picker'
// import SelectDropdown from "react-native-select-dropdown";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import CustomButton from "../../../components/CustomButton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import tw from "twrnc";
// import { HeaderBackButton } from 'react-navigation';
// import { Appbar } from 'react-native-paper'
import { Card, Title, Paragraph } from "react-native-paper";
// import SelectBox from "react-native-multi-selectbox";

// define provinces list
// const navigationOptions = ({navigation}) => {
//   return{
//     headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('A')}}/>)
//  }
// }
const ServProv_Register = ({ navigation }) => {
  const registerValidationSchema = Yup.object().shape({
    fName: Yup.string().required("Required"),
    lName: Yup.string().required("Required"),
    mobileNum: Yup.string().required("Required"),
    district: Yup.string().required("Required"),
    jobRole: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    province: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    qualifications: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
  });

  // const [selectedTeam, setSelectedTeam] = useState({});
  // const [selectedValue, setSelectedValue] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 10,
        // alignItems: "center",
        // backgroundColor: 'yellow'
      }}
    >
      {/* <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate("AuthHomeServProv")} />
    </Appbar.Header> */}

      {/* <Card>
        <Card.Content>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Title>Plumbing work</Title>
              <Text>Location : Seeduwa</Text>
              <Paragraph>Card content</Paragraph>
              <View style={{ flexDirection: "row" }}>
              <Avatar.Image size={24} source={require("../../../assests/imgs/User01.jpg")} />
              <Text>John doe</Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Button mode="outlined" onPress={() => console.log("Pressed")}> Accept </Button>
              <Button mode="outlined" onPress={() => console.log("Pressed")}> Reject</Button>
              <Button mode="outlined" onPress={() => console.log("Pressed")}> View more</Button>
            </View>
          </View>
        </Card.Content>
      </Card> */}

      <Formik
        initialValues={{
          fName: "",
          lName: "",
          age: "",
          jobRole: "",
          mobileNum: "",
          province: "",
          district: "",
          gender: "",
          address: "",
          qualifications: "",
          age: "",
        }}
        validateOnMount={true}
        onSubmit={(values) => {
          console.log("Function called", values);
          Axios.post(
            "http://192.168.43.39:5000/api/v1/servprov/createAccountReq",
            {
              fName: values.fName,
              lName: values.lName,
              gender: values.gender,
              jobRole: values.jobRole,
              mobileNum: values.mobileNum,
              province: values.province,
              district: values.district,
              address: values.address,
              qualifications: values.qualifications,
              age: values.age,
            }
          );
          alert("Your request has been sent successfully!");
          navigation.replace("Login");
        }}
        validationSchema={registerValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <View>
            <ScrollView>
              <View style={[tw`bg-white flex-row z-100 `]}>
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => {
                    navigation.navigate("AuthHomeServProv");
                  }}
                >
                  {/* <Text>Back</Text> */}
                  <FontAwesomeIcon icon={faChevronLeft} size={30} />
                </TouchableOpacity>
              </View>
              {/* ----------------------------------------------------------- Heading -------------------------------------------- */}

              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  color: "#333",
                  marginBottom: 30,
                }}
              >
                Create Account Reuest
              </Text>

              {/* ----------------------------------------------------------- Heading -------------------------------------------- */}

              <View>
                {/* <View
                  style={{
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                    // ,backgroundColor: 'blue'
                    paddingTop: 20,
                  }}
                >
                  <ImageBackground
                    source={require("../../../assests/imgs/User01.jpg")}
                    style={{ width: 120, height: 120 }}
                    imageStyle={{ borderRadius: 60 }}
                  />
                </View> */}
                {/* <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> */}
                {/* ----------------------------------------------------------- First Name -------------------------------------------- */}
                <TextInput
                  label="First Name"
                  onChangeText={handleChange("fName")}
                  onBlur={handleBlur("fName")}
                  value={values.fName}
                  mode="outlined"
                  // error={touched.fName && errors.fName}
                  // {touched.fName && errors.fName && error }
                />
                {touched.fName && errors.fName && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.fName}
                  </Text>
                )}
                {/* ----------------------------------------------------------- First Name -------------------------------------------- */}
                {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
                {/* <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> */}
                {/* ----------------------------------------------------------- Last Name -------------------------------------------- */}
                <TextInput
                  label="Last Name"
                  onChangeText={handleChange("lName")}
                  onBlur={handleBlur("lName")}
                  value={values.lName}
                  mode="outlined"
                  // error={touched.lName && errors.lName}
                />
                {touched.lName && errors.lName && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.lName}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Last Name -------------------------------------------- */}

                {/* ----------------------------------------------------------- Last Name -------------------------------------------- */}
                <TextInput
                  label="Age"
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  value={values.age}
                  mode="outlined"
                  // error={touched.lName && errors.lName}
                />
                {touched.age && errors.age && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.age}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Last Name -------------------------------------------- */}

                {/* ----------------------------------------------------------- Mobile number -------------------------------------------- */}
                <TextInput
                  label="Mobile number"
                  onChangeText={handleChange("mobileNum")}
                  onBlur={handleBlur("mobileNum")}
                  value={values.mobileNum}
                  mode="outlined"
                />
                {touched.mobileNum && errors.mobileNum && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.mobileNum}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Mobile number -------------------------------------------- */}
                {/* ----------------------------------------------------------- Address -------------------------------------------- */}
                <TextInput
                  label="Address"
                  onChangeText={handleChange("address")}
                  multiline
                  numberOfLines={5}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  mode="outlined"
                />
                {touched.address && errors.address && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.address}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Adress -------------------------------------------- */}
                {/* ----------------------------------------------------------- Gender -------------------------------------------- */}
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <View>
                    <Picker
                      name="gender"
                      onChange={handleChange("gender")}
                      onBlur={handleBlur("gender")}
                      selectedValue={values.gender}
                      style={{ height: 50 }}
                      onValueChange={(itemValue, itemIndex) => {
                        setFieldValue("gender", itemValue);
                      }}
                    >
                      <Picker.Item label="Select Gender" />
                      <Picker.Item label="Male" value="M" />
                      <Picker.Item label="Female" value="F" />
                    </Picker>
                    {console.log(values.gender)}
                  </View>
                </View>
                {touched.gender && errors.gender && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.gender}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Gender -------------------------------------------- */}
                {/* ----------------------------------------------------------- Job roles -------------------------------------------- */}
                <View
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <View>
                    <Picker
                      name="jobRole"
                      onChange={handleChange("jobRole")}
                      onBlur={handleBlur("jobRole")}
                      selectedValue={values.jobRole}
                      style={{ height: 50 }}
                      onValueChange={(itemValue, itemIndex) => {
                        setFieldValue("jobRole", itemValue);
                      }}
                    >
                      <Picker.Item label="Select jobRole" value="" />
                      <Picker.Item label="Plumber" value="1" />
                      <Picker.Item label="Carpenter" value="2" />
                      <Picker.Item label="Mason" value="3" />
                    </Picker>
                  </View>
                </View>
                {touched.jobRole && errors.jobRole && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.jobRole}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Job roles -------------------------------------------- */}
                {/* ----------------------------------------------------------- Qualifications -------------------------------------------- */}
                <TextInput
                  label="Qualifications"
                  onChangeText={handleChange("qualifications")}
                  multiline
                  numberOfLines={5}
                  onBlur={handleBlur("qualifications")}
                  value={values.qualifications}
                  mode="outlined"
                />
                {touched.qualifications && errors.qualifications && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.qualifications}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Qualifications -------------------------------------------- */}
                {/* ----------------------------------------------------------- Province -------------------------------------------- */}

                <View>
                  <Picker
                    name="province"
                    onChange={handleChange("province")}
                    onBlur={handleBlur("province")}
                    selectedValue={values.province}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue("province", itemValue);
                    }}
                  >
                    <Picker.Item label="Select Province" value="" />
                    <Picker.Item label="Western" value="Colombo" />
                    <Picker.Item label="Southern" value="Gampaha" />
                    <Picker.Item label="Sabaragmuwa" value="Kaluthara" />
                    <Picker.Item label="Uva" value="Galle" />
                    <Picker.Item label="Eastern" value="Eastern" />
                    <Picker.Item label="Nothern" value="Nothern" />
                    <Picker.Item label="NorthCentral" value="NorthCentral" />
                    <Picker.Item label="Eastern" value="Eastern" />
                    <Picker.Item label="NorthWestern" value="NorthWestern" />
                  </Picker>
                </View>

                {touched.province && errors.province && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.province}
                  </Text>
                )}
                {/* ----------------------------------------------------------- Province -------------------------------------------- */}

                {/* ----------------------------------------------------------- District -------------------------------------------- */}
                <View
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <View>
                    <Picker
                      name="district"
                      onChange={handleChange("district")}
                      onBlur={handleBlur("district")}
                      selectedValue={values.district}
                      style={{ height: 50 }}
                      onValueChange={(itemValue, itemIndex) => {
                        setFieldValue("district", itemValue);
                      }}
                    >
                      <Picker.Item label="Select district" value="" />
                      <Picker.Item label="Colombo" value="Colombo" />
                      <Picker.Item label="Gampaha" value="Gampaha" />
                      <Picker.Item label="Kaluthara" value="Kaluthara" />
                      <Picker.Item label="Galle" value="Galle" />
                      <Picker.Item label="Mathara" value="Mathara" />
                      <Picker.Item label="Hambanthota" value="Hambanthota" />
                      <Picker.Item label="Rathnapura" value="Rathnapura" />
                      <Picker.Item label="Kegalle" value="Kegalle" />
                      <Picker.Item label="Badulla" value="Badulla" />
                      <Picker.Item label="Monaragala" value="Monaragala" />
                      <Picker.Item label="Polonnaruwa" value="Polonnaruwa" />
                      <Picker.Item label="Anuradhapura" value="Anuradhapura" />
                      <Picker.Item label="Kandy" value="Kandy" />
                      <Picker.Item label="Mathale" value="Mathale" />
                      <Picker.Item label="NuwaraEliya" value="NuwaraEliya" />
                      <Picker.Item label="Batticallo" value="Batticallo" />
                      <Picker.Item label="Trincomalee" value="Trincomalee" />
                      <Picker.Item label="Ampara" value="Ampara" />
                      <Picker.Item label="Jaffna" value="Jaffna" />
                      <Picker.Item label="Mannar" value="Mannar" />
                      <Picker.Item label="Mulathiv" value="Mulathiv" />
                      <Picker.Item label="Kilinochchi" value="Kilinochchi" />
                      <Picker.Item label="Vavuniya" value="Vavuniya" />
                      <Picker.Item label="Kurunegala" value="Kurunegala" />
                      <Picker.Item label="Vavuniya" value="Vavuniya" />
                      <Picker.Item label="Puththalam" value="Puththalam" />
                    </Picker>
                  </View>
                </View>
                {touched.district && errors.district && (
                  <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                    {errors.district}
                  </Text>
                )}
              </View>

              {/* ----------------------------------------------------------- Submit button -------------------------------------------- */}
            </ScrollView>
            <CustomButton
              onPress={handleSubmit}
              label={"Submit"}
              type="submit"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                // marginBottom: 30,
              }}
            >
              <Text>All ready have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#2538B8", fontWeight: "700" }}>
                  {" "}
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
            {/* ----------------------------------------------------------- Submit button -------------------------------------------- */}
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ServProv_Register;
