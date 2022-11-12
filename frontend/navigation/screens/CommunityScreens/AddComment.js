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
  AlertDialog,
  Icon,
} from "native-base";

import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-modern-datepicker";
import Constants from "../../../constants/Constants";
import SweetAlert from "react-native-sweet-alert";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function AddComment({ route, navigation }) {
  const [feed, setFeed] = React.useState(route.params.item);
  const [comment, setComment] = React.useState("");
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");

  useEffect(() => {
    setId(feed._id);
  }, []);

  const handleSubmit = async () => {
    if (comment == "") {
      Alert.alert("Please fill all the fields");
      return;
    }

    const data = {
      feedId: id,
      name: name,
      comment: comment,
    };

    await axios
      .post(`${Constants.URL}/api/comments`, data)
      .then((res) => {
        //confirm alert with success icon
        Alert.alert("Comment added successfully", "Thank you for your comment");
      })
      .catch((err) => {
        console.log(err);
      });

    // setName("");
    // setComment("");
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
        }}
        shadow={3}
      >
        Add Comment
      </Box>
      <ScrollView>
        <TouchableOpacity style={styles.imageCon}>
          <Image source={{ uri: feed.image }} style={styles.image1} />
        </TouchableOpacity>
        <VStack width="90%" mx="3" ml={6} maxW="350px" alignSelf="center">
          <FormControl isRequired>
            <FormControl.Label
              marginTop={10}
              _text={{
                bold: true,
                fontSize: "16",
              }}
            >
              Name
            </FormControl.Label>
            <Input
              placeholder="Name"
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
              Write your comment
            </FormControl.Label>
            <TextArea
              placeholder="comment"
              borderColor={"#000"}
              style={styles.input}
              height={12}
              onChangeText={(value) => setComment(value)}
            />
          </FormControl>
          <Button style={styles.uploadButton} onPress={handleSubmit}>
            <Text style={styles.uploadButtonText}> Ok</Text>
          </Button>
        </VStack>
        <Button
          style={styles.uploadButton1}
          onPress={() => navigation.navigate("CommunityFeed")}
        >
          <Text style={styles.uploadButtonText1}> Back</Text>
        </Button>
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
    width: "20%",
    alignSelf: "center",
    height: 50,
    marginBottom: 20,
  },
  uploadButton1: {
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
    width: "20%",

    height: 35,
    marginBottom: 20,
  },

  uploadButtonText: {
    color: "#f6f5f8",
    fontSize: 20,
  },
  uploadButtonText1: {
    color: "#f6f5f8",
    fontSize: 12,
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
