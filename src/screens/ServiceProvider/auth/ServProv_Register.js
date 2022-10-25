import * as React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Chip,
  Dialog,
  Divider,
  IconButton,
  List,
  Paragraph,
  Portal,
  TextInput,
  Title,
} from "react-native-paper";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { BASE_URL } from "../../../utils/config";
import CustomButton from "../../../components/CustomButton";

// impor image picker
import * as ImagePicker from "expo-image-picker";

import {
  faBirthdayCake,
  faCheck,
  faChevronLeft,
  faCreditCard,
  faFemale,
  faGenderless,
  faMale,
  faTransgender,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Payment card import ]
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { useEffect } from "react";
// const API_URL = "http://192.168.43.39:5000/";

import utils from "../../../utils/config";
const ServProv_Register = ({ navigation }) => {
  // calculate dob and gender based on nic
  const [age, setAge] = useState("");
  const [genderNIC, setGenderNIC] = useState("");
  const [birthdate, setBirthdate] = useState("");

  // image picker function
  const [image, setImage] = useState(null);

  // useEffect(async () => {
  //   if (Platform.OS !== "web") {
  //     const { status } = await ImagePicker.requestCameraPermissionsAsync();
  //     if (status !== "granted") {
  //       alert("Permission denied !");
  //     }
  //   }
  // });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const genderDOBwithNIC = (value) => {
    setAge(value);
    if (age) {
      if (age.length == 10) {
        console.log("10 called", parseInt([age[2], age[3], age[4]].join("")));
        const genderNUM = parseInt([age[2], age[3], age[4]].join(""));

        // set birth year
        const birthyear = parseInt(["19", age[0], age[1]].join(""));
        console.log("birth year", birthyear);

        if (genderNUM > 500) {
          const days = genderNUM - 500;
          switch (true) {
            case days < 31:
              setBirthdate([birthyear, "1", days].join("/"));
              break;
            case days < 60:
              setBirthdate([birthyear, "2", days - 31].join("/"));
              break;
            case days < 91:
              setBirthdate([birthyear, "3", days - 60].join("/"));
              break;
            case days < 121:
              setBirthdate([birthyear, "4", days - 91].join("/"));
              break;
            case days < 152:
              setBirthdate([birthyear, "5", days - 121].join("/"));
              break;
            case days < 182:
              setBirthdate([birthyear, "6", days - 152].join("/"));
              break;
            case days < 213:
              setBirthdate([birthyear, "7", days - 182].join("/"));
              break;
            case days < 244:
              setBirthdate([birthyear, "8", days - 213].join("/"));
              break;
            case days < 274:
              setBirthdate([birthyear, "9", days - 244].join("/"));
              break;
            case days < 305:
              setBirthdate([birthyear, "10", days - 274].join("/"));
              break;
            case days < 335:
              setBirthdate([birthyear, "11", days - 305].join("/"));
              break;
            case days < 366:
              setBirthdate([birthyear, "12", days - 335].join("/"));
              break;
            default:
            // code block
          }
          console.log("birth date", birthdate);

          setGenderNIC("F");
        } else if (genderNUM <= 500) {
          const days = genderNUM;
          switch (true) {
            case days < 31:
              setBirthdate([birthyear, "1", days].join("/"));
              break;
            case days < 60:
              setBirthdate([birthyear, "2", days - 31].join("/"));
              break;
            case days < 91:
              setBirthdate([birthyear, "3", days - 60].join("/"));
              break;
            case days < 121:
              setBirthdate([birthyear, "4", days - 91].join("/"));
              break;
            case days < 152:
              setBirthdate([birthyear, "5", days - 121].join("/"));
              break;
            case days < 182:
              setBirthdate([birthyear, "6", days - 152].join("/"));
              break;
            case days < 213:
              setBirthdate([birthyear, "7", days - 182].join("/"));
              break;
            case days < 244:
              setBirthdate([birthyear, "8", days - 213].join("/"));
              break;
            case days < 274:
              setBirthdate([birthyear, "9", days - 244].join("/"));
              break;
            case days < 305:
              setBirthdate([birthyear, "10", days - 274].join("/"));
              break;
            case days < 335:
              setBirthdate([birthyear, "11", days - 305].join("/"));
              break;
            case days < 366:
              setBirthdate([birthyear, "12", days - 335].join("/"));
              break;
            default:
            // code block
          }
          console.log("birth date", birthdate);
          setGenderNIC("M");
        }
      } else if (age.length == 12) {
        console.log("12 called", parseInt([age[4], age[5], age[6]].join("")));
        const genderNUM = parseInt([age[4], age[5], age[6]].join(""));

        // set birth year
        const birthyear = parseInt([age[0], age[1], age[2], age[3]].join(""));
        console.log("birth year", birthyear);

        if (genderNUM > 500) {
          const days = genderNUM - 500;
          switch (true) {
            case days < 31:
              setBirthdate([birthyear, "1", days].join("/"));
              break;
            case days < 60:
              setBirthdate([birthyear, "2", days - 31].join("/"));
              break;
            case days < 91:
              setBirthdate([birthyear, "3", days - 60].join("/"));
              break;
            case days < 121:
              setBirthdate([birthyear, "4", days - 91].join("/"));
              break;
            case days < 152:
              setBirthdate([birthyear, "5", days - 121].join("/"));
              break;
            case days < 182:
              setBirthdate([birthyear, "6", days - 152].join("/"));
              break;
            case days < 213:
              setBirthdate([birthyear, "7", days - 182].join("/"));
              break;
            case days < 244:
              setBirthdate([birthyear, "8", days - 213].join("/"));
              break;
            case days < 274:
              setBirthdate([birthyear, "9", days - 244].join("/"));
              break;
            case days < 305:
              setBirthdate([birthyear, "10", days - 274].join("/"));
              break;
            case days < 335:
              setBirthdate([birthyear, "11", days - 305].join("/"));
              break;
            case days < 366:
              setBirthdate([birthyear, "12", days - 335].join("/"));
              break;
            default:
            // code block
          }
          console.log("birth date", birthdate);
          setGenderNIC("F");
        } else if (genderNUM <= 500) {
          const days = genderNUM;
          switch (true) {
            case days < 31:
              setBirthdate([birthyear, "1", days].join("/"));
              break;
            case days < 60:
              setBirthdate([birthyear, "2", days - 31].join("/"));
              break;
            case days < 91:
              setBirthdate([birthyear, "3", days - 60].join("/"));
              break;
            case days < 121:
              setBirthdate([birthyear, "4", days - 91].join("/"));
              break;
            case days < 152:
              setBirthdate([birthyear, "5", days - 121].join("/"));
              break;
            case days < 182:
              setBirthdate([birthyear, "6", days - 152].join("/"));
              break;
            case days < 213:
              setBirthdate([birthyear, "7", days - 182].join("/"));
              break;
            case days < 244:
              setBirthdate([birthyear, "8", days - 213].join("/"));
              break;
            case days < 274:
              setBirthdate([birthyear, "9", days - 244].join("/"));
              break;
            case days < 305:
              setBirthdate([birthyear, "10", days - 274].join("/"));
              break;
            case days < 335:
              setBirthdate([birthyear, "11", days - 305].join("/"));
              break;
            case days < 366:
              setBirthdate([birthyear, "12", days - 335].join("/"));
              break;
            default:
            // code block
          }
          console.log("birth date", birthdate);
          setGenderNIC("M");
        }
      }
      console.log("GENDER WITH NIC", genderNIC);
    }
  };

  //payment
  // const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const [payerror, setPayerror] = useState("");
  const [paid, setPaid] = useState(false);

  // Payment successfull dialog box
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await Axios.post(`${utils.api}/servprov/registerPayment`);
    console.log(response.data);
    const { clientSecret, error } = await response.data;
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    console.log("handle press called");
    if (!cardDetails?.complete) {
      setPayerror("Please enter Complete card details");
      // Alert.alert("Please enter Complete card details");
      return;
    }
    const billingDetails = {
      email: "techbatta98@gmail.com",
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
        setPayerror("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
          setPayerror(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          setPayerror(null);
          setPaid(true);
          showDialog();
          // alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

  const registerValidationSchema = Yup.object().shape({
    fName: Yup.string().required("Required"),
    lName: Yup.string().required("Required"),
    mobileNum: Yup.string().required("Required"),
    district: Yup.string().required("Required"),
    jobRole: Yup.string().required("Required"),
    // gender: Yup.string().required("Required"),
    // province: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    // qualifications: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 10,
      }}
    >
      <Formik
        initialValues={{
          fName: "",
          lName: "",
          age: "",
          jobRole: "",
          mobileNum: "",
          dob: "",
          district: "",
          gender: "",
          address: "",
          // qualifications: "",
          age: "",
        }}
        validateOnMount={true}
        onSubmit={(values) => {
          Axios.post(
            "http://192.168.43.119:5000/api/v1/servprov/createAccountReq",
            {
              fName: values.fName,
              lName: values.lName,
              gender: genderNIC,
              jobRole: values.jobRole,
              mobileNum: values.mobileNum,
              dob: birthdate,
              district: values.district,
              address: values.address,
              // qualifications: values.qualifications,
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
              {/* <View style={[tw`bg-white flex-row z-100 `]}>
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => {
                    navigation.navigate("AuthHomeServProv");
                  }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} size={30} />
                </TouchableOpacity>
              </View> */}
              {/* ----------------------------------------------------------- Heading -------------------------------------------- */}

              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  color: "#333",
                  marginBottom: 30,
                }}
              >
                {/* Create Account Request */}
              </Text>
              {/* <List.Item
                title="First Item"
                description="Item description"
                left={() => <FontAwesomeIcon icon={faCheck} />}
              /> */}
              <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      paddingRight: 10,
                    }}
                  >
                    Transaction Completed!
                  </Dialog.Title>
                  <Dialog.Content>
                    <View
                      style={{
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        // ,backgroundColor: 'blue'
                        // paddingTop: 50,
                      }}
                    >
                      <TouchableOpacity>
                        <ImageBackground
                          source={require("../../../assests/imgs/TransactionCompleted.png")}
                          style={{ width: 100, height: 100 }}
                          // imageStyle={{ borderRadius: 60 }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: "column",
                          alignItems: "center",
                          paddingRight: 10,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          size={30}
                          color="green"
                        />
                      </View>
                    </View>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={hideDialog}>Ok</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
              {/* ----------------------------------------------------------- Heading -------------------------------------------- */}

              <View>
                <Card style={{ margin: 10 }}>
                  <Card.Title
                    title="Basic Information"
                    // left={LeftContent}
                  />

                  <Card.Content>
                    <View
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
                    </View>

                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text>Image</Text>
                      <Button
                        title="Pick an image from camera roll"
                        onPress={pickImage}
                      />
                      {image && (
                        <Image
                          source={{ uri: image }}
                          style={{ width: 200, height: 200 }}
                        />
                      )}
                    </View>
                    {/* ----------------------------------------------------------- First Name -------------------------------------------- */}
                    <TextInput
                      style={{ height: 40 }}
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
                      style={{ height: 40 }}
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
                      style={{ height: 40 }}
                      label="NIC"
                      onChangeText={handleChange("age")}
                      onBlur={handleBlur("age")}
                      value={values.age}
                      onFocus={genderDOBwithNIC(values.age)}
                      mode="outlined"
                      // error={touched.lName && errors.lName}
                    />
                    {touched.age && errors.age && (
                      <Text style={{ fontSize: 14, color: "red", margin: 10 }}>
                        {errors.age}
                      </Text>
                    )}

                    {/* ----------------------------------------------------------- Last Name -------------------------------------------- */}
                    {/* ----------------------------------------------------------- Gender & Birthday-------------------------------------------- */}

                    <View
                      style={{ flex: 1, flexDirection: "row", marginTop: 15 }}
                    >
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <FontAwesomeIcon
                          icon={genderNIC == "M" ? faMale : faFemale}
                          style={{ margin: 10 }}
                          size={24}
                        />
                        <Chip
                          mode="outlined+"
                          onPress={() => console.log("Pressed")}
                        >
                          <Text
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              paddingRight: 50,
                            }}
                          >
                            {genderNIC == "M"
                              ? "Male"
                              : null || genderNIC == "F"
                              ? "Female"
                              : null}
                          </Text>
                        </Chip>
                      </View>
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <FontAwesomeIcon
                          icon={faBirthdayCake}
                          style={{ margin: 10 }}
                          size={24}
                        />
                        <Chip
                          mode="outlined+"
                          onPress={() => console.log("Pressed")}
                        >
                          <Text
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              paddingRight: 50,
                            }}
                          >
                            {birthdate}
                          </Text>
                        </Chip>
                      </View>
                    </View>

                    {/* ----------------------------------------------------------- Gender & Birthday-------------------------------------------- */}
                  </Card.Content>
                </Card>

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  Contact details +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <Card style={{ margin: 10 }}>
                  <Card.Title
                    title="Contact Details"
                    // left={LeftContent}
                  />

                  <Card.Content>
                    {/* ----------------------------------------------------------- Mobile number -------------------------------------------- */}
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={{ flex: 1, flexDirection: "column" }}>
                        <TextInput
                          style={{ height: 40 }}
                          label="Mobile number"
                          onChangeText={handleChange("mobileNum")}
                          onBlur={handleBlur("mobileNum")}
                          value={values.mobileNum}
                          mode="outlined"
                        />
                        {touched.mobileNum && errors.mobileNum && (
                          <Text
                            style={{ fontSize: 14, color: "red", margin: 10 }}
                          >
                            {errors.mobileNum}
                          </Text>
                        )}
                      </View>
                    </View>

                    {/* ----------------------------------------------------------- Mobile number -------------------------------------------- */}
                    {/* ----------------------------------------------------------- Address -------------------------------------------- */}
                    <TextInput
                      style={{ height: 80 }}
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
                  </Card.Content>
                </Card>

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  Contact details +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  Job details +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                <Card style={{ margin: 10 }}>
                  <Card.Title
                    title="Job details"
                    // left={LeftContent}
                  />

                  <Card.Content>
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
                          style={{ height: 40 }}
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
                          style={{ height: 40 }}
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
                          <Picker.Item
                            label="Hambanthota"
                            value="Hambanthota"
                          />
                          <Picker.Item label="Rathnapura" value="Rathnapura" />
                          <Picker.Item label="Kegalle" value="Kegalle" />
                          <Picker.Item label="Badulla" value="Badulla" />
                          <Picker.Item label="Monaragala" value="Monaragala" />
                          <Picker.Item
                            label="Polonnaruwa"
                            value="Polonnaruwa"
                          />
                          <Picker.Item
                            label="Anuradhapura"
                            value="Anuradhapura"
                          />
                          <Picker.Item label="Kandy" value="Kandy" />
                          <Picker.Item label="Mathale" value="Mathale" />
                          <Picker.Item
                            label="NuwaraEliya"
                            value="NuwaraEliya"
                          />
                          <Picker.Item label="Batticallo" value="Batticallo" />
                          <Picker.Item
                            label="Trincomalee"
                            value="Trincomalee"
                          />
                          <Picker.Item label="Ampara" value="Ampara" />
                          <Picker.Item label="Jaffna" value="Jaffna" />
                          <Picker.Item label="Mannar" value="Mannar" />
                          <Picker.Item label="Mulathiv" value="Mulathiv" />
                          <Picker.Item
                            label="Kilinochchi"
                            value="Kilinochchi"
                          />
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
                  </Card.Content>
                </Card>

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  Payment details +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                <Card style={{ margin: 10 }}>
                  <Card.Title
                    title="Payment"
                    // left={LeftContent}
                  />

                  <Card.Content>
                    {/* ----------------------------------------------------------- Payment -------------------------------------------- */}

                    <View style={styles.container}>
                      {/* <TextInput
                    mode="outlined"
                    autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChange={(value) => setEmail(value.nativeEvent.text)}
                    style={styles.input}
                  /> */}
                      <CardField
                        postalCodeEnabled={true}
                        placeholder={{
                          number: "4242 4242 4242 4242",
                        }}
                        cardStyle={styles.card}
                        style={styles.cardContainer}
                        onCardChange={(cardDetails) => {
                          setPayerror("");
                          setCardDetails(cardDetails);
                        }}
                      />

                      {{ payerror } && (
                        <Text
                          style={{
                            fontSize: 14,
                            color: "red",
                            marginBottom: 10,
                            marginLeft: 10,
                          }}
                        >
                          {payerror}
                        </Text>
                      )}
                      {/* <Button
                        onPress={handlePayPress}
                        title="Pay"
                        disabled={loading}
                      /> */}
                      {paid ? (
                        <Button
                          icon={faCheck}
                          color="green"
                          mode="contained"
                          // onPress={handlePayPress}
                          // disabled={true}
                          // loading={loading}
                        >
                          {/* <FontAwesomeIcon icon={faCheck} /> */}
                          Paid
                        </Button>
                      ) : (
                        <Button
                          icon={faCheck}
                          color="black"
                          mode="contained"
                          onPress={handlePayPress}
                          disabled={loading}
                          loading={loading}
                        >
                          {/* <FontAwesomeIcon icon={faCheck} /> */}
                          Pay $10.99
                        </Button>
                      )}
                    </View>
                    {/* ----------------------------------------------------------- Payment -------------------------------------------- */}
                  </Card.Content>
                </Card>
              </View>
              {/* ----------------------------------------------------------- Submit button -------------------------------------------- */}
            </ScrollView>
            <Button
              // style={{ backgroundColor: "#2538B8" }}
              mode="contained"
              color="#2538B8"
              // onPress={handlePayPress}
              onPress={handleSubmit}
              // label="Submit"
              disabled={payerror != null}
              type="submit"
            >
              Send Request
            </Button>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 40,
    marginVertical: 30,
  },
});
