import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Modal,
  Pressable,
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

  const [userDetails, setuserDetails] = useState([]);
  const [approveModalVisible, setApproveModalVisible] = useState(false);

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
      })
      .catch((err) => {
        console.log(err);
      });

    // setName("");
    // setComment("");
    setApproveModalVisible(false);
  };

  const approvePressed = () => {
    setApproveModalVisible(true);
    // setuserDetails(data);
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
          <Button style={styles.uploadButton} onPress={approvePressed}>
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
  input: {
    backgroundColor: "#rgba(230, 255, 214, 1)",
  },

  uploadButton: {
    borderRadius: 10,

    shadowColor: "grey",
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

    shadowColor: "grey",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 2,
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
  alertButtonContainer: {
    flexDirection: "row",
  },
  hr: {
    color: "rgba(26, 182, 92, 1)",
    marginBottom: 20,
  },
});
