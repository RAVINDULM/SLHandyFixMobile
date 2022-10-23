import * as React from "react";
import { TextInput } from "react-native-paper";
import { RadioButton, List, Checkbox, Button } from "react-native-paper";
import Multiselect from "multiselect-react-dropdown";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import CustomButton from "../../../components/CustomButton";

const Cus_Register = () => {
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mobileNum, setmobileNum] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [rePassword, setrePassword] = React.useState("");
  const [genderExpanded, setgenderExpanded] = React.useState(false);
  const [jobRoleExpanded, setjobRoleExpanded] = React.useState(false);
  const [mobileNumberExpanded, setmobileNumberExpanded] = React.useState(false);
  const [bankDetailsExpanded, setbankDetailsExpanded] = React.useState(false);
  const [passwordExpanded, setpasswordExpanded] = React.useState(false);
  const [nameExpanded, setnameExpanded] = React.useState(false);

  const genderhandlePress = () => setgenderExpanded(!genderExpanded);
  const jobrolehandlePress = () => setjobRoleExpanded(!jobRoleExpanded);
  const mobilenumberhandlePress = () =>
    setmobileNumberExpanded(!mobileNumberExpanded);
  const bankdetailshandlePress = () =>
    setbankDetailsExpanded(!bankDetailsExpanded);
  const passwordhandlePress = () => setpasswordExpanded(!passwordExpanded);
  const namehandlePress = () => setnameExpanded(!nameExpanded);
  console.log("gender here", gender);
  console.log("First name here", fName);
  console.log("Last name here", lName);

  const [food, setFood] = React.useState([
    "Carpenter",
    "Plumber",
    "Electrician",
    "Mason",
  ]);
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
      <ScrollView>
        {/* ----------------------------------------------------------- Heading -------------------------------------------- */}

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Register
        </Text>

        {/* ----------------------------------------------------------- Heading -------------------------------------------- */}

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

        <List.Section title="">
          <List.Accordion
            style={{ marginBottom: 1 }}
            title="Name"
            expanded={nameExpanded}
            onPress={namehandlePress}
          >
            {/* ----------------------------------------------------------- First Name -------------------------------------------- */}
            <TextInput
              label="First Name"
              value={fName}
              error
              onChangeText={(fName) => setfName(fName)}
            />

            {/* ----------------------------------------------------------- First Name -------------------------------------------- */}

            {/* ----------------------------------------------------------- Last Name -------------------------------------------- */}
            <TextInput
              label="Last Name"
              value={lName}
              // error
              onChangeText={(lName) => setlName(lName)}
            />

            {/* ----------------------------------------------------------- Last Name -------------------------------------------- */}
          </List.Accordion>
        </List.Section>
        {/* ----------------------------------------------------------- Gender -------------------------------------------- */}

        <List.Section>
          <List.Accordion
            title="Gender"
            expanded={genderExpanded}
            onPress={genderhandlePress}
          >
            <RadioButton.Group
              onValueChange={(gender) => setGender(gender)}
              value={gender}
            >
              <RadioButton.Item label="Male" value="M" />
              <RadioButton.Item label="Female" value="F" />
            </RadioButton.Group>
          </List.Accordion>
        </List.Section>

        {/* ----------------------------------------------------------- Gender -------------------------------------------- */}

        {/* ----------------------------------------------------------- Mobile number -------------------------------------------- */}

        <List.Section title="">
          <List.Accordion
            style={{ marginBottom: 1 }}
            title="Mobile Number"
            expanded={mobileNumberExpanded}
            onPress={mobilenumberhandlePress}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // marginTop: 20,
              }}
            >
              <TextInput
                label="Mobile number"
                value={mobileNum}
                // error
                onChangeText={(mobileNum) => setmobileNum(mobileNum)}
                style={{
                  height: 50,
                  width: "70%",
                }}
              />
              <View // icon="camera"
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",

                  // marginTop: 20,
                }}
              >
                <Button
                  // icon="camera"
                  style={{
                    height: 40,
                    justifyContent: "center",
                    // alignContent: "center",
                    // alignItems: "center",
                    // marginTop: 20,
                  }}
                  // loading="true"
                  mode="contained"
                  onPress={() => console.log("otp send")}
                >
                  Get OTP
                </Button>
              </View>
            </View>
          </List.Accordion>
        </List.Section>

        {/* ----------------------------------------------------------- Mobile number -------------------------------------------- */}

        <List.Section title="">
          <List.Accordion
            style={{ marginBottom: 1 }}
            title="Password"
            expanded={passwordExpanded}
            onPress={passwordhandlePress}
          >
            <TextInput
              label="Password"
              value={password}
              // error
              onChangeText={(password) => setpassword(password)}
            />
            <TextInput
              label="Re-type Password"
              value={rePassword}
              // error
              onChangeText={(rePassword) => setrePassword(rePassword)}
            />
          </List.Accordion>
        </List.Section>

        {/* ----------------------------------------------------------- Submit button -------------------------------------------- */}
      </ScrollView>
      <CustomButton
        label={"Submit"}
        onPress={() => console.log("Registered")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Text>All ready have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Text style={{ color: "#2538B8", fontWeight: "700" }}> Log In</Text>
        </TouchableOpacity>
      </View>

      {/* ----------------------------------------------------------- Submit button -------------------------------------------- */}
    </SafeAreaView>
  );
};

export default Cus_Register;
