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

export default function UpdatePlantDonation({ route, navigation }) {
  const [image, setImage] = useState(null);
  const [formData, setData] = React.useState({});
  const [date, setDate] = useState(new Date(1598051730000));
  const [eventID, setEventID] = useState("123456789");
  const [eventName, setEventName] = useState("");
  const [plantName, setPlantName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [planDonation, setPlanDonation] = React.useState({});
  

  const [show, setShow] = useState(false);

  React.useEffect(() => {
    setPlanDonation(route.params.item);
    setEventID(route.params.item.eventID);
    setEventName(route.params.item.eventName);
    setPlantName(route.params.item.plantName);
    setDescription(route.params.item.description);
    setAmount(String(route.params.item.amount));
    setDate(route.params.item.date);
  }, [planDonation]);

  const handleSubmit = () => {
    if (eventID === "") {
      Alert.alert("Please enter a eventID");
      return;
    } else if (eventName === "") {
      Alert.alert("Please enter a eventName");
      return;
    } else if (plantName === "") {
      Alert.alert("Please enter a plantName");
      return;
    } else if (description === "") {
      Alert.alert("Please enter a description");
      return;
    } else if (amount === "") {
      Alert.alert("Please enter a amount");
      return;
    } else if (date === "") {
      Alert.alert("Please enter a date");
      return;
    }

    const data = {
      eventID,
      eventName,
      userId : "123456789",
      userName : "test",
      plantName,
      date,
      amount,
      description,
    };

    axios
      .put(`${Constants.URL}/api/plantDonations/${planDonation._id}`, data)
      .then((res) => {
        console.log(res.data);
        Alert.alert("Doantion added successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    setEventID("");
    setEventName("");
    setPlantName("");
    setDate("");
    setAmount("");
    setDescription("");
  };

  return (
    <NativeBaseProvider style={styles.main1}>
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
        Plant Donation
      </Box>

      <ScrollView style={styles.main}>
        <VStack >
          <Spacer />
          <VStack width="90%" mx="3" ml={6} maxW="350px" alignSelf="center">
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Event ID
              </FormControl.Label>
              <Input
                 borderColor = {"#000"}
                 heigh = {12}
                 backgroundColor = {"rgba(217, 217, 217, 1)"}
                 borderBottomLeftRadius ={10}
                 borderBottomRightRadius = {10}
                 borderTopLeftRadius = {10}
                 borderTopRightRadius = {10}
                placeholder="Event eventID"
                value={eventID}
                type="text"
                isDisabled={true}
                onChangeText={(value) => setEventID(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Event Name
              </FormControl.Label>
              <Input
                 borderColor = {"#000"}
                 heigh = {12}

                 backgroundColor = {"rgba(217, 217, 217, 1)"}
                 borderBottomLeftRadius ={10}
                 borderBottomRightRadius = {10}
                 borderTopLeftRadius = {10}
                 borderTopRightRadius = {10}
                placeholder="Event Name"
                value={eventName}
                type="text"
                isDisabled={true}
                onChangeText={(value) => setEventName(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Name of the Plant
              </FormControl.Label>
              <Input
                placeholder="Plant Name"
                borderColor={"#000"}
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={plantName}
                type="text"
                isDisabled={true}
                onChangeText={(value) => setPlantName(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Amount of Plant
              </FormControl.Label>
              <Input
                placeholder="Amount of Plant"
                borderColor={"#000"}
                w="100%"
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={amount}
                onChangeText={(value) => setAmount(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Description about plant
              </FormControl.Label>
              <TextArea
                placeholder="Description about plant"
                borderColor={"#000"}
                w="100%"
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={description}
                type="text"
                onChangeText={(value) => setDescription(value)}
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
            <Button style={styles.uploadButton} onPress={handleSubmit}>
              <Text style={styles.uploadButtonText}>Donate</Text>
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  uploadButton: {
    borderRadius: 10,
    alignSelf: "center",
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
    width: "45%",
    height: 60,
  },
  uploadButtonText: {
    color: "#f6f5f8",
    fontSize: 20,
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

  },
  imageCon: {
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
    width: "100%",
    height: 155,
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
  card: {
    width: "90%",
    marginBottom: 10,
    marginLeft: "5%",
    height: "auto",
    marginTop: 10,

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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
