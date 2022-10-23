import React, { useState } from "react";

import {
  faCalendar,
  faChevronLeft,
  faClock,
  faLocationDot,
  faTimesCircle,
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
import { Rating } from "react-native-ratings";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import axios from "axios";

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
const timeicon = <Ionicons name="time-outline" />;
const ServPro_feed = () => {
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  // fetch data from backend

  const [posts, setPosts] = useState([]);
  // AsyncStorage.setItem("userToken", JSON.stringify(userToken));
  // const value = AsyncStorage.getItem('userToken');
  useEffect(() => {
    console.log("gget jobs called");
    axios
      .get("http://192.168.43.39:5000/api/v1/servprov/getJobposts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
                    Are You sure You want to Request for this job?
                  </Paragraph>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Button
                      style={{ marginBottom: 10, marginRight: 10 }}
                      mode="outlined"
                      onPress={() => console.log("ok called")}
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 25, fontFamily: "Roboto-Medium" }}>
                Welcome Back John Doe !
              </Text>
              {/* </ImageBackground> */}
            </View>
            {/* ---------------------------------------------------- card fo a job requests ------------------------------------------------------------ */}
          </View>
          <View>
            {posts.map((posts) => (
              <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
                <Card.Cover
                  source={{ uri: "https://picsum.photos/700" }}
                  style={{ marginBottom: 10 }}
                />
                <Card.Content>
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "column" }}>
                      {/* Job details card */}
                      <Card.Content
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                        }}
                      >
                        <Title key={posts.post_id}> {posts.title} </Title>
                        <Paragraph>{posts.description}</Paragraph>
                        <Card.Actions>
                          <View style={{ flexDirection: "row" }}>
                            <Chip
                              onPress={() => console.log("Pressed location")}
                              style={{ marginBottom: 5, marginRight: 10 }}
                            >
                              <View>
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  size={0}
                                />
                              </View>
                              <Text> {posts.location}</Text>
                            </Chip>
                            <Chip
                              onPress={() => console.log("Pressed date")}
                              style={{ marginBottom: 5 }}
                            >
                              <View>
                                <FontAwesomeIcon icon={faCalendar} size={0} />
                              </View>
                              <Text>{posts.date}</Text>
                            </Chip>
                          </View>
                        </Card.Actions>
                      </Card.Content>

                      {/* Post details card */}
                      <Card.Content
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          marginTop: 10,
                          padding: 10,
                        }}
                      >
                        <Card.Actions>
                          <Avatar.Image
                            size={24}
                            source={require("../../assests/imgs/User01.jpg")}
                            style={{ marginRight: 10 }}
                          />
                          <View style={{ flexDirection: "column" }}>
                            <Text>John doe</Text>
                            <View style={{ flexDirection: "row" }}>
                              <Rating
                                size={8}
                                imageSize={12}
                                showRating={false}
                                isDisabled={false}
                                ratingContainerStyle={{
                                  padding: 10,
                                }}
                                starContainerStyle={{
                                  backgroundColor: "black",
                                }}
                              />
                              <Text
                                style={{
                                  fontSize: 10,
                                  color: "#F0C30E",
                                  marginLeft: 1,
                                }}
                              >
                                (16)
                              </Text>
                            </View>
                          </View>

                          <Chip
                            // icon={timeicon}
                            onPress={() => console.log("Pressed location")}
                            style={{
                              marginLeft: 10,
                              // backgroundColor: "yellow",
                            }}
                          >
                            <Ionicons name="time" size={20} />
                            <Text style={{ marginLeft: 5 }}> @10.47</Text>
                          </Chip>
                        </Card.Actions>
                      </Card.Content>
                    </View>

                    {/* //card actions */}
                    <Card.Actions>
                      <Ionicons name="person-add-outline" />
                      <Text style={{ marginLeft: 5 }}>
                        {posts.requestCount}
                      </Text>

                      <Button
                        style={{ marginLeft: 160 }}
                        onPress={() => setVisible(true)}
                      >
                        Request
                      </Button>
                    </Card.Actions>
                    {/* <View
                    style={{
                      flexDirection: "column",
                      paddingLeft: 20,
                      marginTop: 20,
                    }}
                  >
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
                      onPress={() => console.log("")}
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
                  </View> */}
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

export default ServPro_feed;
