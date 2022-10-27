import React from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { List } from "react-native-paper";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
function ServProv_Notifications() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <List.Accordion
            title="Place your payment"
            // style={{ borderRadius: 10 }}
            left={() => (
              <List.Icon
                icon={() => <Ionicons name="card-outline" size={30} />}
              />
            )}
            right={() => (
              <List.Icon
                icon={() => <Ionicons name="alert-circle" size={30} />}
              />
            )}
          ></List.Accordion>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ServProv_Notifications;
