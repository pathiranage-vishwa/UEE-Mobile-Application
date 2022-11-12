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

export default function ShareEvent({ navigation }) {
  const [name, setName] = React.useState("");
  const [caption, setCaption] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    //this tells the application to give an alert if someone doesn't allow //permission.  It will return to the previous screen.
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    let base64Img = `data:image/jpg;base64,${result.base64}`;
    uploadImage(base64Img);
  };

  //image upload start
  const uploadImage = (photo) => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "Chat-app");

    fetch("https://api.cloudinary.com/v1_1/donfmtaf4/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async () => {
    if (name === "" || caption === "" || date === "" || image === null) {
      alert("Please fill all the details");
      return;
    }

    const data = {
      name: name,
      caption: caption,
      date: date,
      image: image,
    };

    console.log(data);

    await axios
      .post(`${Constants.URL}/api/shares/`, data)
      .then((res) => {
        Alert.alert("Event shared successfully");
        navigation.navigate("CommunityFeed");
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
        Share Events
      </Box>
      <Spacer />
      <ScrollView>
        <VStack width="90%" mx="3" ml={6} maxW="350px" alignSelf="center">
          <FormControl isRequired>
            <FormControl.Label
              marginTop={10}
              _text={{
                bold: true,
                fontSize: "16",
              }}
            >
              Event Name
            </FormControl.Label>
            <Input
              placeholder="Event Name"
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
              Caption
            </FormControl.Label>
            <Input
              placeholder="Caption"
              borderColor={"#000"}
              style={styles.input}
              height={12}
              onChangeText={(value) => setCaption(value)}
            />
          </FormControl>
          <FormControl isRequired mt={5}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Date
            </FormControl.Label>
            <DatePicker
              date={date}
              mode="date"
              selectorStartingYear={2022}
              options={{
                selectedTextColor: "white",
                mainColor: "green",
                textColor: "black",
                backgroundColor: "rgba(245, 245, 245, 1)",
                borderColor: "black",
                borderWidth: 2,
                doneButtonColor: "green",
              }}
              onDateChange={(date) => setDate(date)}
            />
          </FormControl>
          <FormControl isRequired mt={5}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Upload image
            </FormControl.Label>
            <TouchableOpacity style={styles.imageCon} onPress={pickImage}>
              {image ? (
                <Image source={{ uri: image }} style={styles.image1} />
              ) : (
                <Image
                  source={require("../../../assets/images/upload.png")}
                  style={styles.image2}
                />
              )}
            </TouchableOpacity>
          </FormControl>
          <Button style={styles.uploadButton} onPress={handleSubmit}>
            <Text style={styles.uploadButtonText}> Post</Text>
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
