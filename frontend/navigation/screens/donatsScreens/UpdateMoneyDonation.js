import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Alert,
  Dimensions,
  Modal,
  TouchableOpacity,
  Pressable,
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
  NumberInput,
} from "native-base";

import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-modern-datepicker";
import Constants from "../../../constants/Constants";

export default function ImagePickerExample({ route, navigation }) {
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

  const [donation, setDonation] = React.useState({});

  const [approveModalVisible, setApproveModalVisible] = useState(false);
  const [rejectModalVisible, setRejectModalVisible] = useState(false);

  React.useEffect(() => {
    setDonation(route.params.item);

    setEventID(donation.eventID);
    setEventName(donation.eventName);
    setAccountNumber(String(donation.accountNumber));
    setBankName(donation.bankName);
    setBranchCode(String(donation.branchCode));
    setAmount(String(donation.amount));
    setDate(donation.date);
  }, [donation]);

  const approvePressed = () => {
    setApproveModalVisible(true);
    // setuserDetails(data);
  };

  const rejectPressed = () => {
    setRejectModalVisible(true);
    // setuserDetails(data);
  };

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
      userId: "63709eb972c9fc8b672d9958",
      userName: "user",
      accountNumber,
      date,
      amount,
      bankName,
      branchCode,
      image,
    };

    axios
      .put(`${Constants.URL}/api/moneyDonations/${donation._id}`, data)
      .then((res) => {
        setApproveModalVisible(false);
        navigation.navigate("DonationUpcomingEvent");
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
        }}
        shadow={3}
      >
        Money Donation
      </Box>

      <ScrollView style={styles.main}>
        <VStack>
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
                borderColor={"#000"}
                heigh={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                placeholder="Event eventID"
                value={eventID}
                isDisabled={true}
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
                borderColor={"#000"}
                heigh={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                placeholder="Event Name"
                value={eventName}
                isDisabled={true}
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
              <TouchableOpacity
                isRequired
                style={styles.imageCon}
                onPress={pickImage}
              >
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
                keyboardType="numeric"
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
            <Button style={styles.uploadButton} onPress={approvePressed}>
              <Text style={styles.uploadButtonText}>Update</Text>
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
      {/* pop up alert */}
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <Modal
            style={styles.modal}
            animationType="fade"
            transparent={true}
            visible={approveModalVisible}
            onRequestClose={() => {
              setApproveModalVisible(!approveModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText1}>
                  Confirm to <Text style={styles.modalText2}> Update !</Text>
                </Text>
                <Text style={styles.hr}>
                  _____________________________________________
                </Text>

                <Image source={require("../../../assets/images/done.png")} />

                <View style={styles.alertButtonContainer}>
                  <Pressable
                    style={styles.warningBtnYes}
                    onPress={handleSubmit}
                  >
                    <Text
                      style={[
                        styles.modalText,
                        { color: "#ffffff" },
                        { marginLeft: 25 },
                      ]}
                    >
                      Yes
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.warningBtnNo}
                    onPress={() => setApproveModalVisible(!approveModalVisible)}
                  >
                    <Text
                      style={[
                        styles.modalText,
                        { color: "rgba(26, 182, 92, 1)" },
                        { marginLeft: 25 },
                      ]}
                    >
                      No
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
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

  // alert
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000aa",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "auto",
    width: "90%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    backgroundColor: "red",
  },
  modal: {
    background: "red",
    position: "absolute",
    top: "50px",
    right: "calc(50% - 200px)",
    border: "1px solid #ccc",
    padding: "1px",
    minHeight: "300px",
  },
  warningBtnYes: {
    backgroundColor: "rgba(26, 182, 92, 1)",
    elevation: 7,
    width: 130,
    height: 60,
    maxWidth: 150,
    padding: 15,
    marginLeft: 10,
    paddingStart: 20,
    borderRadius: 25,
    marginTop: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
  },
  warningBtnNo: {
    backgroundColor: "rgba(232, 248, 239, 1)",

    elevation: 7,
    width: 130,
    height: 60,
    marginLeft: 45,
    maxWidth: 150,
    padding: 15,
    paddingStart: 25,
    borderRadius: 25,
    marginRight: 10,
    marginTop: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 22,
    height: 30,
  },
  modalText1: {
    fontWeight: "bold",
    fontSize: 24,
    height: 30,

    marginTop: 20,
  },
  modalText2: {
    fontWeight: "bold",
    color: "orange",
  },
  modalText3: {
    fontWeight: "bold",
    color: "red",
  },
  alertButtonContainer: {
    flexDirection: "row",
  },
  hr: {
    color: "rgba(26, 182, 92, 1)",
    marginBottom: 20,
  },
  modalText5: {
    fontWeight: "bold",
    fontSize: 24,
    height: 30,
    color: "rgba(26, 182, 92, 1)",
  },
  loading: {
    width: "50%",
    marginTop: 23,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
  },
  modalView1: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "30%",
    width: "80%",
  },
});
