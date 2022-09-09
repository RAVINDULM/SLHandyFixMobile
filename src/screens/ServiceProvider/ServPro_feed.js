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

const ServPro_feed = () => {
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

            {/* ---------------------------------------------------- card fo a job requests ------------------------------------------------------------ */}
          </View>
          <View>
            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ marginBottom: 10 }}
              />
              <Card.Content>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Title>Plumbing work</Title>
                    <Paragraph>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, ullam quidem iste eos maiores rem voluptates
                      laboriosam eum quos ut.
                    </Paragraph>
                    <View style={{ flexDirection: "row" }}>
                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5, marginRight: 10 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faLocationDot} size={0} />
                        </View>
                        <Text>Location</Text>
                      </Chip>
                      <Chip
                        onPress={() => console.log("Pressed date")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faCalendar} size={0} />
                        </View>
                        <Text>12/08/2022</Text>
                      </Chip>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>John doe</Text>

                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5, marginRight: 10 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faClock} size={0} />
                        </View>
                        <Text>10.47 pm</Text>
                      </Chip>
                    </View>
                  </View>
                  <View
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
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ marginBottom: 10 }}
              />
              <Card.Content>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Title>Plumbing work</Title>
                    <Paragraph>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, ullam quidem iste eos maiores rem voluptates
                      laboriosam eum quos ut.
                    </Paragraph>
                    <View style={{ flexDirection: "row" }}>
                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5, marginRight: 10 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faLocationDot} size={0} />
                        </View>
                        <Text>Location</Text>
                      </Chip>
                      <Chip
                        onPress={() => console.log("Pressed date")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faCalendar} size={0} />
                        </View>
                        <Text>12/08/2022</Text>
                      </Chip>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>John doe</Text>
                    </View>
                  </View>
                  <View
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
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ marginBottom: 10 }}
              />
              <Card.Content>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Title>Plumbing work</Title>
                    <Paragraph>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, ullam quidem iste eos maiores rem voluptates
                      laboriosam eum quos ut.
                    </Paragraph>
                    <View style={{ flexDirection: "row" }}>
                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5, marginRight: 10 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faLocationDot} size={0} />
                        </View>
                        <Text>Location</Text>
                      </Chip>
                      <Chip
                        onPress={() => console.log("Pressed date")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faCalendar} size={0} />
                        </View>
                        <Text>12/08/2022</Text>
                      </Chip>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>John doe</Text>
                    </View>
                  </View>
                  <View
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
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card style={{ backgroundColor: "#F3F5F7", margin: 10 }}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ marginBottom: 10 }}
              />
              <Card.Content>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Title>Plumbing work</Title>
                    <Paragraph>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, ullam quidem iste eos maiores rem voluptates
                      laboriosam eum quos ut.
                    </Paragraph>
                    <View style={{ flexDirection: "row" }}>
                      <Chip
                        onPress={() => console.log("Pressed location")}
                        style={{ marginBottom: 5, marginRight: 10 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faLocationDot} size={0} />
                        </View>
                        <Text>Location</Text>
                      </Chip>
                      <Chip
                        onPress={() => console.log("Pressed date")}
                        style={{ marginBottom: 5 }}
                      >
                        <View>
                          <FontAwesomeIcon icon={faCalendar} size={0} />
                        </View>
                        <Text>12/08/2022</Text>
                      </Chip>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <Avatar.Image
                        size={24}
                        source={require("../../assests/imgs/User01.jpg")}
                        style={{ marginRight: 10, marginLeft: 10 }}
                      />
                      <Text>John doe</Text>
                    </View>
                  </View>
                  <View
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
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServPro_feed;
