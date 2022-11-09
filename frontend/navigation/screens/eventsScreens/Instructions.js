import { NativeBaseProvider, ScrollView, Box } from "native-base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Instructions() {
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <Box
          p="2"
          alignSelf={{ base: "center", md: "flex-start" }}
          mt="20%"
          rounded="xl"
          style={styles.header}
          _text={{
            fontSize: "32",
            fontWeight: "medium",
            color: "black",
            alignSelf: "center",
            letterSpacing: "lg",
            fontFamily: "Roboto",
          }}
          shadow={3}
        >
          Instructions
        </Box>
        <Text style={styles.textHeader}>
          This will help you to create event successfully
        </Text>
        <Text style={styles.step}>Step 1</Text>
        <View style={styles.card}>
          <Text style={styles.text}>
            First check the current requests from the requested event pool and
            select one.
          </Text>
        </View>
        <Text style={styles.step}>Step 2</Text>
        <View style={styles.card}>
          <Text style={styles.text}>
            Check selected event request using given details with other
            community members.
          </Text>
        </View>
        <Text style={styles.step}>Step 3</Text>
        <View style={styles.card}>
          <Text style={styles.text}>
            If the given details correct, approve the request and get that
            request to create event.
          </Text>
        </View>
        <Text style={styles.step}>Step 4</Text>
        <View style={styles.card}>
          <Text style={styles.text}>In the create event form,</Text>
          <Text style={styles.textSub}>
            1.upload sample cover picture to event
          </Text>
          <Text style={styles.textSub}>2.provide proper name for event </Text>
          <Text style={styles.textSub}>
            3. select type of the event (ex: charity/planting)
          </Text>
          <Text style={styles.textSub}>
            4. correctly select the place to have event
          </Text>
          <Text style={styles.textSub}>5. select proper date and time</Text>
          <Text style={styles.textSub}>
            6. give a brief description about event
          </Text>
          <Text style={styles.textSub}>
            7.provide what is the goal of having that event and complete the
            form.
          </Text>
        </View>
        <Text style={styles.step}>Step 5</Text>
        <View style={styles.card}>
          <Text style={styles.text}>
            Finally, submit the form and confirm the event creation.
          </Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    height: 60,
  },
  textHeader: {
    fontSize: 24,
    alignSelf: "center",
    marginTop: 20,
    width: "90%",
  },
  step: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 20,
    fontStyle: "bold",
    fontWeight: "bold",
    color: "rgba(26, 182, 92, 1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    marginBottom: 3,
  },
  card: {
    width: "92%",
    marginBottom: 10,
    marginLeft: "4%",
    marginRight: "4%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    marginLeft: 10,
  },
  textSub: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
    marginLeft: 30,
  },
});
