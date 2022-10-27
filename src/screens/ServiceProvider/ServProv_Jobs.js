import React, { useState } from "react";

import {
  faCalendar,
  faChevronLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph, Chip } from "react-native-paper";
import {
  RadioButton,
  List,
  Checkbox,
  Button,
  Avatar,
  Appbar,
} from "react-native-paper";

// dialog box react native paper
import { Dialog, Portal } from "react-native-paper";
import { useEffect } from "react";
import axios from "axios";
import utils from "../../utils/config";

// date formter
import { format, compareAsc } from "date-fns";
// const Acccept = () => {
//   console.log("accept called");
//   const [visible, setVisible] = React.useState(false);

//   const hideDialog = () => setVisible(false);
//   return (
//     <Portal>
//       <Dialog visible={visible} onDismiss={hideDialog}>
//         <Dialog.Title>This is a title</Dialog.Title>
//         <Dialog.Content>
//           <Paragraph>This is simple dialog</Paragraph>
//         </Dialog.Content>
//       </Dialog>
//     </Portal>
//   );
// };

const ServProv_Jobs = () => {
  const [jobid, setJobid] = useState("");

  // accept job requests
  const acceptJobRequests = () => {
    console.log("jobid", jobid);
    axios
      .put(`${utils.api}/servprov/acceptJobRequest/` + jobid)
      .then((res) => {
        console.log("data", res.data);
        hideDialog();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // reject job request
  const [rejectVisible, setRejectVisible] = React.useState(false);
  const hideRjectDialog = () => setRejectVisible(false);

  const rejectJobRequests = () => {
    console.log("jobid", jobid);
    axios
      .put(`${utils.api}/servprov/rejectJobRequests/` + jobid)
      .then((res) => {
        console.log("data", res.data);
        hideDialog();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ------------- get job request data ----------------------
  const [jobRequests, setJobRequests] = useState([]);
  // AsyncStorage.setItem("userToken", JSON.stringify(userToken));
  // const value = AsyncStorage.getItem('userToken');
  useEffect(() => {
    // 10.22.163.187:5000/api/v1/
    console.log("get jobs called");
    console.log(`${utils.api}/servprov/getJobRequests`);
    axios
      .get(`${utils.api}/servprov/getJobRequests`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0].jobId);
        setJobRequests(res.data);
        setJobid(res.data[0].jobId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <View>
            {/* -----------------------------------   dialog box start ---------------------------------------------- */}
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Accept Job</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    Are You sure You want to accept this job?
                  </Paragraph>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Button
                      style={{ marginBottom: 10, marginRight: 10 }}
                      mode="outlined"
                      onPress={() => acceptJobRequests()}
                    >
                      {" "}
                      Yes{" "}
                    </Button>
                    <Button
                      style={{ marginBottom: 10, marginLeft: 10 }}
                      mode="outlined"
                      onPress={() => hideDialog()}
                    >
                      {" "}
                      No
                    </Button>
                  </View>
                </Dialog.Content>
              </Dialog>
            </Portal>
            {/* ----------------------------------------------------- dialog box ends -------------------------------------------------------------------*/}
          </View>

          <View>
            {/* -----------------------------------   reject dialog box start ---------------------------------------------- */}
            <Portal>
              <Dialog visible={rejectVisible} onDismiss={hideRjectDialog}>
                <Dialog.Title>Accept Job</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    Are You sure You want to reject this job?
                  </Paragraph>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Button
                      style={{ marginBottom: 10, marginRight: 10 }}
                      mode="outlined"
                      onPress={() => rejectJobRequests()}
                    >
                      {" "}
                      Yes{" "}
                    </Button>
                    <Button
                      style={{ marginBottom: 10, marginLeft: 10 }}
                      mode="outlined"
                      onPress={() => hideRjectDialog()}
                    >
                      {" "}
                      No
                    </Button>
                  </View>
                </Dialog.Content>
              </Dialog>
            </Portal>
            {/* ----------------------------------------------------- reject dialog box ends -------------------------------------------------------------------*/}
          </View>

          {/* ---------------------------------------------------- card fo a job requests ------------------------------------------------------------ */}
          <View>
            {jobRequests.map((jobRequests) => (
              <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
                <Card.Content>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column" }}>
                      <Title key={jobRequests.jobId}>{jobRequests.title}</Title>
                      {/* <Text>Location : Seeduwa</Text> */}
                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faLocationDot} size={0} />
                        </View>
                        <Text key={jobRequests.jobId}>
                          {jobRequests.district}
                        </Text>
                      </Chip>
                      <Chip
                        onPress={() => console.log("Pressed date")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faCalendar} size={0} />
                        </View>
                        <Text key={jobRequests.jobId}>
                          {format(
                            new Date(jobRequests.requiredDate),
                            "MM/dd/yyyy"
                          )}
                        </Text>
                      </Chip>
                      <View style={{ flexDirection: "row" }}>
                        <Avatar.Image
                          size={24}
                          source={require("../../assests/imgs/User01.jpg")}
                          style={{ marginRight: 10, marginLeft: 10 }}
                        />
                        <Text>John doe</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                      <Button
                        style={{ marginBottom: 10 }}
                        mode="outlined"
                        onPress={() => setVisible(true)}
                      >
                        {" "}
                        Accept{" "}
                      </Button>
                      <Button
                        style={{ marginBottom: 10 }}
                        mode="outlined"
                        onPress={() => setRejectVisible(true)}
                      >
                        {" "}
                        Reject
                      </Button>
                      <Button
                        mode="outlined"
                        onPress={() => console.log("Pressed")}
                      >
                        {" "}
                        View more
                      </Button>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServProv_Jobs;
