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
import DatePicker from "react-native-modern-datepicker";
import Constants from "../../../constants/Constants";

export default function AddProcess({ route, navigation }) {
  const [formData, setData] = React.useState({});
  const [startDate, setStartDate] = useState(new Date(1598051730000));
  const [endDate, setEndDate] = useState(new Date(1598051730000));
  const [eventID, setEventID] = useState("123456789");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [cost, setCost] = useState("");
  const [event, setEvent] = React.useState({});

  const [show, setShow] = useState(false);

  React.useEffect(() => {
    setEvent(route.params.item);
    setEventID(route.params.item._id);
  
  }, [event]);

 
  const handleSubmit = () => {
    if (eventID === "") {
      Alert.alert("Please enter a eventID");
      return;
    } else if (taskName === "") {
      Alert.alert("Please enter a taskName");
      return;
    } else if (taskDescription === "") {
      Alert.alert("Please enter a taskDescription");
      return;
    } else if (cost === "") {
      Alert.alert("Please enter a cost");
      return;
    } else if (startDate === "") {
      Alert.alert("Please enter a startDate");
      return;
    } else if (endDate === "") {
      Alert.alert("Please enter a endDate");
      return;
    }

    const data = {
      eventID,
      taskName,
      startDate,
      endDate,
      taskDescription,
      cost,
    };

    axios
      .post(`${Constants.URL}/api/tasks`, data)
      .then((res) => {
        console.log(res.data);
        Alert.alert("Task added successfully");
        navigation.navigate("ProcessUpCommingEvent");
      })
      .catch((err) => {
        console.log(err);
      });

    setEventID("");
    setTaskName("");
    setStartDate("");
    setEndDate("");
    setCost("");
    setTaskDescription("");
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
          color: "rgba(57, 73, 41, 1)",
          alignSelf: "center",
          letterSpacing: "lg",
        }}
        shadow={3}
      >
        Add task for event
      </Box>

      <ScrollView style={styles.main}>
        <VStack >
          <Spacer />
          <VStack width="90%" mx="3" ml={6} maxW="350px" alignSelf="center">
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Task Name
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
                value={taskName}
                type="text"
                onChangeText={(value) => setTaskName(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Start startDate
              </FormControl.Label>
              <DatePicker
                date={startDate}
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
                name = "startDate"
                onDateChange={(date) => setStartDate(date)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                End startDate
              </FormControl.Label>
              <DatePicker
                date={endDate}
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
                name = "endDate"
                onDateChange={(date) => setEndDate(date)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Cost
              </FormControl.Label>
              <Input
                placeholder="cost of Plant"
                borderColor={"#000"}
                w="100%"
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={cost}
                onChangeText={(value) => setCost(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Discription about the task
              </FormControl.Label>
              <TextArea
                placeholder="taskDescription about plant"
                borderColor={"#000"}
                w="100%"
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={taskDescription}
                type="text"
                onChangeText={(value) => setTaskDescription(value)}
              />
            </FormControl>
          
            <Button style={styles.uploadButton} onPress={handleSubmit}>
              <Text style={styles.uploadButtonText}>Save</Text>
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
