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

// date formter
import { format, compareAsc } from "date-fns";
// dialog box react native paper
import { Dialog, Portal } from "react-native-paper";
import { useEffect } from "react";
import axios from "axios";
import utils from "../../utils/config";

const ServProv_Jobs = () => {
  const [jobid, setJobid] = useState(null);
  const startJob = () => {
    console.log("first", jobid);
    axios
      .put(`${utils.api}/servprov/startJob/ ` + jobid)
      .then((res) => {
        console.log(res.data);
        hideDialog();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [jobs, setJobs] = useState([]);
  // AsyncStorage.setItem("userToken", JSON.stringify(userToken));
  // const value = AsyncStorage.getItem('userToken');

  useEffect(() => {
    console.log("get jobs called");
    axios
      .get(`${utils.api}/servprov/getServiceProviderJobs`)
      .then((res) => {
        console.log(res.data[0].jobId);
        setJobs(res.data);
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
                <Dialog.Title>Start the Job</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    Are You sure You you want to start this job?
                  </Paragraph>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Button
                      style={{ marginBottom: 10, marginRight: 10 }}
                      mode="outlined"
                      onPress={() => startJob()}
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
            {/* ---------------------------------------------------- card fo a job requests ------------------------------------------------------------ */}
          </View>
          <View>
            <View></View>
            {jobs.map((jobs) => (
              <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
                <Card.Content>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column" }}>
                      <Title key={jobs.jobId}>{jobs.title}</Title>
                      {/* <Text>Location : Seeduwa</Text> */}
                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faLocationDot} size={0} />
                        </View>
                        <Text key={jobs.jobId}>{jobs.location}</Text>
                      </Chip>
                      <Chip
                        onPress={() => console.log("Pressed date")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faCalendar} size={0} />
                        </View>
                        <Text key={jobs.jobId}>
                          {format(new Date(jobs.requiredDate), "MM/dd/yyyy")}
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
                      <View
                        style={{
                          flexDirection: "column",
                          paddingLeft: 20,
                          paddingBottom: 20,
                        }}
                      >
                        <View
                          style={{
                            backgroundColor:
                              jobs.status == 0
                                ? "red"
                                : jobs.status == 1
                                ? "green"
                                : jobs.status == 2
                                ? "grey"
                                : jobs.status == 3
                                ? "blue"
                                : "green",
                            width: 100,
                            height: 25,
                            borderRadius: 10,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text key={jobs.jobId} style={{ fontSize: 17 }}>
                            {jobs.status == 0
                              ? "Rejected"
                              : jobs.status == 1
                              ? "pending"
                              : jobs.status == 2
                              ? "accepted"
                              : jobs.status == 3
                              ? "started"
                              : "completed"}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column", paddingLeft: 20 }}
                      >
                        <Button
                          disabled={
                            jobs.status == 3 || jobs.status == 4 ? true : false
                          }
                          style={{ marginBottom: 10 }}
                          mode="outlined"
                          onPress={() => setVisible(true)}
                        >
                          {" "}
                          Start{" "}
                        </Button>
                        {}
                      </View>
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
