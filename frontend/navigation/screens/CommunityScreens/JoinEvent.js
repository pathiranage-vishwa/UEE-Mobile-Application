import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Alert,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  NativeBaseProvider,
  ScrollView,
  Center,
  Heading,
  Button,
  Box,
  VStack,
  FormControl,
  Input,
  Spacer,
  Select,
  CheckIcon,
  Flex,
  TextArea,
} from "native-base";

import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-modern-datepicker";
import Constants from "../../../constants/Constants";

export default function JoinEvent({ route, navigation }) {
  const [event, setEvent] = React.useState({});
  const [name, setName] = React.useState("");
  const [community, setCommunity] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setEvent(route.params.item);
  }, [event]);

  const handleSubmit = async () => {
    if (name == "" || community == "" || description == "") {
      Alert.alert("Please fill all the fields");
      return;
    }

    const data = {
      eventId: event._id,
      eventName: event.title,
      eventDate: event.date,
      eventLocation: event.location,
      name: name,
      community: community,
      description: description,
      image: event.image,
    };

    await axios
      .post(`${Constants.URL}/api/joinEvents/`, data)
      .then((res) => {
        axios
          .put(`${Constants.URL}/api/events/participants/${event._id}`)
          .then((response) => {
            setIsOpen(true);
          })
          .catch((error) => {
            console.log(error);
          });

        Alert.alert("Success", "You have successfully joined the event");
        navigation.navigate("DisplayJoinEvents");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <NativeBaseProvider>
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
        Join For Event
      </Box>
      <ScrollView>
        <TouchableOpacity style={styles.imageCon}>
          <Image source={{ uri: event.image }} style={styles.image1} />
        </TouchableOpacity>
        <VStack width="90%" mx="3" ml={6} maxW="350px" alignSelf="center">
          <FormControl isRequired>
            <FormControl.Label
              _text={{
                bold: true,
                fontSize: "16",
              }}
            >
              Name
            </FormControl.Label>
            <Input
              placeholder="Candidate Name"
              borderColor={"#000"}
              style={styles.input}
              marginBottom={5}
              height={12}
              onChangeText={(value) => setName(value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label
              _text={{
                bold: true,
                fontSize: "16",
              }}
            >
              Community Name
            </FormControl.Label>
            <Input
              placeholder="Community Name"
              borderColor={"#000"}
              style={styles.input}
              height={12}
              onChangeText={(value) => setCommunity(value)}
            />
          </FormControl>
          <FormControl isRequired mt={5}>
            <FormControl.Label
              _text={{
                bold: true,
                fontSize: "16",
              }}
            >
              Why do you like to join?
            </FormControl.Label>
            <TextArea
              placeholder="Description"
              borderColor={"#000"}
              style={styles.input}
              w="100%"
              onChangeText={(value) => setDescription(value)}
            />
          </FormControl>
          <Button style={styles.uploadButton} onPress={handleSubmit}>
            <Text style={styles.uploadButtonText}> Join</Text>
          </Button>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#rgba(230, 255, 214, 1)",
  },

  uploadButton: {
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
    margin: 10,
    padding: 10,
    backgroundColor: "rgba(26, 182, 92, 1)",
    width: "30%",
    alignSelf: "center",
    height: 50,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: "#f6f5f8",
    fontSize: 20,
    fontFamily: "Roboto",
  },
  main1: {
    backgroundColor: "white",
  },
  border: {
    borderWidth: 2,
    borderColor: "green",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: "10%",
    backgroundColor: "white",
  },
  main: {
    marginTop: "10%",
    height: "100%",
  },
  image1: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  imageCon: {
    marginTop: 20,
    borderRadius: 16,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,

    backgroundColor: "white",
    width: "90%",
    height: 300,
    marginBottom: 20,
  },
  image2: {
    width: "100%",
    resizeMode: "contain",
    height: "100%",
  },
  header: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    height: 60,
  },
  helpBtn: {
    backgroundColor: "rgba(26, 182, 92, 1)",
    width: "20%",
    alignSelf: "center",
    marginLeft: "70%",
    marginTop: "6%",
    color: "black",
    height: 70,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
  },
});
