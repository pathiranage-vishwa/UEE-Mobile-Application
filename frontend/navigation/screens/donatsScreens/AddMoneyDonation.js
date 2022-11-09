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

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [formData, setData] = React.useState({});
  const [date, setDate] = useState(new Date(1598051730000));
  const [eventID, setEventID] = useState("123456789");
  const [eventName, setEventName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [amount, setAmount] = useState("");

  const [show, setShow] = useState(false);

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

  const handleSubmit = () => {
    if (eventID === "") {
      Alert.alert("Please enter a eventID");
      return;
    } else if (eventName === "") {
      Alert.alert("Please enter a eventName");
      return;
    } else if (accountNumber === "") {
      Alert.alert("Please enter a accountNumber");
      return;
    } else if (bankName === "") {
      Alert.alert("Please enter a bankName");
      return;
    } else if (branchCode === "") {
      Alert.alert("Please enter a branchCode");
      return;
    } else if (amount === "") {
      Alert.alert("Please enter a amount");
      return;
    } else if (image === null) {
      Alert.alert("Please upload an image");
      return;
    } else if (date === "") {
      Alert.alert("Please enter a date");
      return;
    }

    const data = {
      eventID,
      eventName,
      userId: "123456789",
      accountNumber,
      date,
      amount,
      bankName,
      branchCode,
      image,
    };

    axios
      .post(`${Constants.URL}/api/moneyDonations`, data)
      .then((res) => {
        Alert.alert("Donation added successfully");
        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
      });

    setEventID("");
    setEventName("");
    setAccountNumber("");
    setDate("");
    setAmount("");
    setBankName("");
    setBranchCode("");
    setImage(null);
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
          fontFamily: "Roboto",
        }}
        shadow={3}
      >
        Money Donation
      </Box>

      <ScrollView style={styles.main}>
        <VStack >
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/p1.jpg")}
          />
        </View>
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
                onChangeText={(value) => setEventName(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Account Number
              </FormControl.Label>
              <Input
                placeholder="Account Number"
                borderColor={"#000"}
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={accountNumber}
                type="number"
                onChangeText={(value) => setAccountNumber(value)}
              />
            </FormControl>
            <FormControl isRequired>
              <Box maxW="350" mt="5">
                <FormControl.Label
                  _text={{
                    bold: true,
                  }}
                >
                  Select Bank Name
                </FormControl.Label>
                <Select
                  minWidth="200"
                  borderColor={"#000"}
                  selectedValue={bankName}
                  height={12}
                  backgroundColor={"rgba(217, 217, 217, 1)"}
                  accessibilityLabel="Select your Bank Name"
                  placeholder="Select Bank Name"
                  borderTopLeftRadius={10}
                  borderTopRightRadius={10}
                  borderBottomLeftRadius={10}
                  borderBottomRightRadius={10}
                  _selectedItem={{
                    bg: "green",
                    endIcon: <CheckIcon size="5" />,
                    fontSize: "lg",
                    fontWeight: "bold",
                  }}
                  onValueChange={(itemValue) => setBankName(itemValue)}
                  mt={1}
                >
                  <Select.Item label="Commercial Bank" value="commercial" />
                  <Select.Item label="People's Bank" value="people" />
                  <Select.Item label="Sampath Bank" value="sampath" />
                </Select>
              </Box>
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Enter Branch Code
              </FormControl.Label>
              <Input
                placeholder="Branch Code"
                borderColor={"#000"}
                w="100%"
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={branchCode}
                type="number"
                onChangeText={(value) => setBranchCode(value)}
              />
            </FormControl>
            <VStack mt={5}>
            <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Upload Payment Slip
              </FormControl.Label>
              <TouchableOpacity isRequired style={styles.imageCon} onPress={pickImage}>
             
            {image ? (
              <Image source={{ uri: image }} style={styles.image1} />
            ) : (
              <Image
                source={require("../../../assets/images/upload_donation.png")}
                style={styles.image2}
              />
            )}
          </TouchableOpacity>
            </VStack>
          <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Donate Amount
              </FormControl.Label>
              <Input
                placeholder="Donate Amount"
                borderColor={"#000"}
                w="100%"
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={amount}
                type="number"
                onChangeText={(value) => setAmount(value)}
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
