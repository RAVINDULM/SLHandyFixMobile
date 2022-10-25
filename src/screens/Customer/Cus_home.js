import React, { useState } from "react";
import { StyleSheet } from 'react-native';

import {
  faCalendar,
  faChevronLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

import {
  Button,
  Avatar,
  Card,
  Title,
  Chip,
  Dialog,
  Paragraph,
  Portal
} from "react-native-paper";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";
import Axios from "axios";
import utils from "../../utils/config";
import { Rating } from "react-native-ratings";
import axios from "axios";

// const optionsPerPage = [2, 3, 4];

const Cus_home = ({ navigation }) => {


  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  const [joblist, setjoblist] = useState([]);
  const [statuslist, setstatus] = useState([]);
  const [finalrate, setRatevalue] = useState("");
  const [serviceproviderId, setspId] = useState();
  const getcustomerId = 1;

  const ratingCompleted = (rating) => {
    setRatevalue(rating);

  };

  const setRate = () => {
    console.log("rating:" + finalrate);

    Axios.post(utils.api + "/customer1/rateserviceprovider/", { customerId: getcustomerId, serviceProviderId: serviceproviderId, rate: finalrate }).then((res) => {
      alert("succesfully completed")
      setVisible(false);

    }).catch((err) => {
      console.log(err);
    })

  }
  function setserviceprovidertoID(sepID) {
    console.log(sepID);
    setspId(sepID);
    setVisible(true);
  }



  useEffect(() => {
    // 10.22.163.187:5000/api/v1/
    console.log("get jobs called");
    console.log("UserID "+getcustomerId)
    Axios.get(utils.api + "/customer1/getjoblist/" + getcustomerId)
      .then((res) => {
        console.log("tf hutto")
        console.log(res.data);
        // setjoblist(res.data);

        // setJobid(res.data.jobId);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", marginTop: 10 }}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          {/* -----------------------------------   dialog box start ---------------------------------------------- */}
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title style={{ textAlign: "center" }}>Rate</Dialog.Title>
              <Dialog.Content>
                <Paragraph style={{ textAlign: "center", fontSize: 17 }} >
                  Rate your service provider to complete
                </Paragraph>
                <View style={{ marginRight: 35 }} isDisabled={true}>
                  <Rating
                    showRating
                    isDisabled={false}
                    onStartRating={ratingCompleted}
                    style={{ paddingVertical: 10 }}
                  />
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}
                >
                  <Button
                    style={{ marginBottom: 10, marginRight: 10, width: 100 }}
                    mode="outlined"
                    onPress={() => setVisible(false)}
                  >
                    {" "}
                    Cancel{" "}
                  </Button>
                  <Button
                    style={{ marginBottom: 10, marginLeft: 10, width: 100 }}
                    mode="outlined"
                    onPress={() => setRate()}

                  >
                    {" "}
                    Rate
                  </Button>
                </View>
              </Dialog.Content>
            </Dialog>
          </Portal>
          {/* ----------------------------------------------------- dialog box ends -------------------------------------------------------------------*/}
          {/* ---------------------------------------------------- card fo a job requests ------------------------------------------------------------ */}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // marginTop: 20
          }}
        >

        </View>

        {/* ---------------------------number cards---------------------------------- */}

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

          <View style={styles.mainContainer}>
            <View style={styles.subcontainer}>
              <Text style={{ fontSize: 35, color: 'white', marginLeft: 15 }}>4</Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>Placed Jobs</Text>
            </View>
          </View>

          <View style={styles.mainContainer}>
            <View style={styles.subcontainer}>
              <Text style={{ fontSize: 35, color: 'white', marginLeft: 15 }}>4</Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>Accepted Jobs</Text>
            </View>
          </View>

          <View style={styles.mainContainer}>
            <View style={styles.subcontainer}>
              <Text style={{ fontSize: 35, color: 'white', marginLeft: 15 }}>4</Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20 }}>Completed Jobs</Text>
            </View>
          </View>
        </View>




        {/* ----------------------------------------------------ongoing job cards--------------------------------------------------------- */}
        <View style={{ backgroundColor: 'lightgrey', paddingTop: 10 }}>

          <View style={{ alignItems: 'center' }}>
            <Text style={{
              fontSize: 20,
              color: "black",
              fontWeight: '500'
            }}>My Jobs
            </Text>
          </View>
          {/* <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column",paddingRight:20 }}>
                    <Title>Plumbing work</Title>
                    <Chip
                      // onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View style={{paddingRight:10}}>
                        <FontAwesomeIcon icon={faCalendar} size={0}/>
                      </View>
                      <Text>12/08/2022</Text>
                    </Chip>
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>John Michelle</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    <Button
                      style={{ marginBottom: 10 ,borderRadius: 5, backgroundColor: 'green'}}
                      color="white"
                    >
                      {" "}
                      New
                    </Button>
                    <Button
                      mode="outlined"
                      onPress={() => navigation.navigate("Cus_spProfileView")}
                    >
                      {" "}
                      View more
                    </Button>
                  </View>
                </View>
              </Card.Content>
            </Card>
        </View> */}
          <View>
          {console.log(joblist)}
            {joblist.map((joblist) => (
              <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
                <Card.Content>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", paddingRight: 10 }}>
                      <Title key={joblist.serviceproviderId}
                        style={{ marginBottom: 10 }}

                      > {joblist.title || "User"}</Title>


                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Avatar.Image
                          size={50}
                          source={require("../../assests/imgs/User01.jpg")}
                          style={{ marginRight: 10, marginBottom: 10 }}
                        />
                        <Text key={joblist.serviceproviderId} style={{ fontSize: 17 }}>{joblist.firstName + " " + joblist.lastName}</Text>
                      </View>
                      <View>
                        <TouchableOpacity>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              margin: 5,
                            }}
                          >
                            <ImageBackground
                              source={require("../../assests/icons/icons8-communication-50.png")}
                              style={{ width: 30, height: 30 }}
                            />
                            <Text
                              style={{
                                paddingLeft: 20,
                                fontSize: 16,
                                fontWeight: "bold",
                                width: 100,
                              }}
                            >
                              CHAT
                            </Text>
                          </View>

                        </TouchableOpacity>
                      </View>

                      <Button disabled={joblist.status == 3 ? false : true}
                        mode="outlined"
                        onPress={(e) => setserviceprovidertoID(joblist.serviceProviderId)}
                      >
                        {" "}
                        Completed
                      </Button>
                    </View>

                    <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                      <View
                        style={{ backgroundColor: joblist.status == 0 ? 'red' : joblist.status == 1 ? "green" : joblist.status == 2 ? "grey" : joblist.status == 3 ? "blue" : "green", width: 100, height: 25, borderRadius: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}
                      >

                        <Text key={joblist.serviceproviderId} style={{ fontSize: 17 }}>{joblist.status == 0 ? 'Rejected' : joblist.status == 1 ? "pending" : joblist.status == 2 ? "accepted" : joblist.status == 3 ? "completed" : "started"}</Text>
                      </View>

                    </View>

                  </View>
                </Card.Content>
              </Card>
            ))}

          </View>

          {/* <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column",paddingRight:20 }}>
                    <Title>Electrical work</Title>
                    <Chip
                      // onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View style={{paddingRight:10}}>
                        <FontAwesomeIcon icon={faCalendar} size={0} />
                      </View>
                      <Text>12/08/2022</Text>
                    </Chip>
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>Jithru Perera</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    <Button
                      style={{ marginBottom: 10 ,borderRadius: 5, backgroundColor: 'goldenrod'}}
                      color="white"
                    >
                      {" "}
                      Ongoing
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
        </View> */}

          {/* <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Content>
                <View style={{ flexDirection: "row"}}>
                  <View style={{ flexDirection: "column" ,paddingRight:20 }}>
                    <Title>Masonary work</Title>
                    <Chip
                      // onPress={() => console.log("Pressed date")}
                      style={{ marginBottom: 5 }}
                    >
                      <View style={{paddingRight:10}}>
                        <FontAwesomeIcon icon={faCalendar} size={0} />
                      </View>
                      <Text>12/08/2022</Text>
                    </Chip>
                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>Eric Mic</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    <Button
                      style={{ marginBottom: 10 ,borderRadius: 5, backgroundColor: 'goldenrod'}}
                      color="white"
                    >
                      {" "}
                      ongoing
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
        </View> */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: 100,
    height: 120,
    backgroundColor: "#F3F5F7",
    margin: 10,
    elevation: 10,
    borderRadius: 5
  },

  subcontainer: {
    backgroundColor: '#2538B8',
    borderRadius: 25,
    marginBottom: 15,
    marginTop: 6,
    width: 50,
    height: 50,
    justifyContent: 'center'
  }
})

export default Cus_home;
