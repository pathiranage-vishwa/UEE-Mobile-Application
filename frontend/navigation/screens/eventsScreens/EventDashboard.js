import { NativeBaseProvider, Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function EventDashboard({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Button onPress={() => navigation.navigate("PreviousEvents")}>
          previous Events
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
