import { NativeBaseProvider, Button } from "native-base";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

export default function EventDashboard({ navigation }) {
  //open gmail when click on button with to and subject
  const sendEmail = () => {
    Linking.openURL(
      'mailto: "sarangahettiarachchi1999@gmail.com" ?subject= Reject the request  &body= I am sorry to inform you that your request has been rejected'
    );
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Button onPress={() => navigation.navigate("PreviousEvents")}>
          previous Events
        </Button>
        <Button m={10} onPress={sendEmail}>
          open Email
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
