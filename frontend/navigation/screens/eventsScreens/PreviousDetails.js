import {
  NativeBaseProvider,
  Box,
  Flex,
  Button,
  Icon,
  AlertDialog,
} from "native-base";
import React from "react";
import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import Constants from "../../../constants/Constants";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function PreviousDetails({ route, navigation }) {
  const [event, setEvent] = React.useState({});

  React.useEffect(() => {
    setEvent(route.params.item);
  }, [event]);

  //event details to be print in pdf
  const eventDetails = `
    <html>
      <body>

      
      <div style="width: 90%; height: auto; background-color: #fff; border-radius: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); padding: 20px; margin: 20px;"
      border-color="green"
      >
        
       <h1><center>${event.title}</center> </h1>
        <img src=${event.image} alt="Italian Trulli" width="100%">
        <h2>Event Date: ${event.date}</h2>
        <h2>Event Time: ${event.time}</h2>
        <h2>Event Location: ${event.location}</h2>
        <h2>Event Status: ${event.status}</h2>
         <h2> ${event.description}</h2>
         <h2>${event.goal}</h2>
         
      </div>
       
       
      </body>
    </html>
  
  `;
  const genereatePdf = async () => {
    const file = await printToFileAsync({
      html: eventDetails,
      base64: false,
      fileName: "eventDetails",
    });

    //share with pdf name
    await shareAsync(file.uri, {
      mimeType: "application/pdf",
      dialogTitle: "Share PDF",
      UTI: "com.adobe.pdf",
    });
  };

  return (
    <NativeBaseProvider style={styles.container}>
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
        {event.title}
      </Box>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={event.image ? { uri: event.image } : null}
        />

        <Text style={styles.sub1}>
          <Text style={styles.date}>Date : </Text> {event.date}
        </Text>

        <Text style={styles.sub}>
          <Text style={styles.date}>Location :</Text> {event.location}
        </Text>

        <Text style={styles.sub}>
          <Text style={styles.date}>Status :</Text> {event.status}
        </Text>
        <Text style={styles.sub3}>{event.description}</Text>

        <Text style={styles.sub3}>{event.goal}</Text>

        <Button
          style={styles.button1}
          backgroundColor="#rgba(26, 182, 92, 1)"
          onPress={genereatePdf}
        >
          <Text style={styles.text1}>Get Report</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    height: 60,
  },
  card: {
    marginTop: 20,
    width: "94%",
    marginBottom: 10,
    marginLeft: "3%",
    marginRight: "3%",
    height: "auto",
    paddingBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  },
  date: {
    color: "rgba(26, 182, 92, 1)",
  },
  sub: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    width: "100%",
  },
  sub1: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  sub3: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 15,
    width: "90%",
  },
  button1: {
    marginTop: 20,
    width: "30%",
    marginLeft: "65%",
    marginRight: 10,
    margin: 10,
    borderRadius: 10,
    height: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  button2: {
    marginTop: 20,
    borderColor: "rgba(26, 182, 92, 1)",
    borderWidth: 2,
    width: "24%",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    marginLeft: "auto",
  },
  button3: {
    marginTop: 20,
    borderColor: "rgba(26, 182, 92, 1)",
    borderWidth: 2,
    width: "24%",
    borderRadius: 10,
    margin: 10,
  },
  text1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginEnd: 5,
  },
  text2: {
    color: "rgba(26, 182, 92, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
  iGroup: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(26, 182, 92, 1)",
    marginLeft: 10,
  },
});
