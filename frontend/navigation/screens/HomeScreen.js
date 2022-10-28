import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return <Text style={styles.text}>Home Screen</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    marginTop: 400,
    marginLeft: 100,
  },
});
