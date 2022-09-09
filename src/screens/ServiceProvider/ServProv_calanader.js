import * as React from "react";
import { useState } from "react";
import { faListDots, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  StyleProp,
  ViewStyle,
  Animated,
  Platform,
  ScrollView,
  SafeAreaView,
  I18nManager,
} from "react-native";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { AnimatedFAB } from "react-native-paper";

// dialog box react native paper
import { Paragraph, Dialog, Portal, TextInput } from "react-native-paper";

// multiple date picker
// import DatePicker from "react-native-date-picker";
// import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const ServProv_calanader = ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
}) => {
  // dialog box variable
  const [visibledialog, setVisibleDialog] = React.useState(false);
  const hideDialog = () => setVisibleDialog(false);

  // date selector
  // const [date, setDate] = useState(new Date());

  //fab variables
  const [isExtended, setIsExtended] = React.useState(true);
  const isIOS = Platform.OS === "ios";
  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };
  const fabStyle = { [animateFrom]: 16 };

  //menu variables
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // calendar variable

  const [items, setItems] = React.useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          // console.log(numItems);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Card>
          <Card.Content>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ marginRight: 10 }}>{item.name}</Text>
              {/* <Provider> */}
              <Menu
                visible={visibleMenu}
                onDismiss={closeMenu}
                anchor={
                  // <Appbar.Action icon="menu" color="black" onPress={openMenu} />
                  <TouchableOpacity onPress={console.log("key", item.height)}>
                    <FontAwesomeIcon icon={faListDots} color="black" />
                  </TouchableOpacity>
                }
              >
                <Menu.Item
                  onPress={() => {
                    console.log("Option 1 was pressed");
                  }}
                  title="Option 1"
                />
                <Menu.Item
                  onPress={() => {
                    console.log("Option 2 was pressed");
                  }}
                  title="Option 2"
                />
                <Menu.Item
                  onPress={() => {
                    console.log("Option 3 was pressed");
                  }}
                  title="Option 3"
                  disabled
                />
              </Menu>
              {/* </Provider> */}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* -----------------------------------   dialog box start ---------------------------------------------- */}
      <Portal>
        <Dialog visible={visibledialog} onDismiss={hideDialog}>
          <Dialog.Title>Add New Job</Dialog.Title>
          <Dialog.Content>
            <View>
              <TextInput label="Job ID" mode="outlined" />
              {/* <DateTimePickerAndroid date={date} onDateChange={setDate} /> */}
              {/* <DatePicker value={value} onChange={setValue} /> */}
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Button
                style={{ marginBottom: 10, marginRight: 20 }}
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

      <Agenda
        onScroll={onScroll}
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2022-07-07"}
        refreshControl={null}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
      />
      <StatusBar />
      <AnimatedFAB
        icon={faPlus}
        label={"Add new"}
        extended={isExtended}
        onPress={() => setVisibleDialog(true)}
        visible={visible}
        animateFrom={"right"}
        iconMode={"static"}
        style={[stylesFab.fabStyle, style, fabStyle]}
      />
    </View>
  );
};

export default ServProv_calanader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

const stylesFab = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
});
