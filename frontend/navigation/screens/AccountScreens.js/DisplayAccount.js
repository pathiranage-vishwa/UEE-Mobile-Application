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

export default function DisplayAccount() {


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
          textAlign: "center",
        }}
        shadow={3}
      >
        Send your donation to this account
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
                Account holder name
              </FormControl.Label>
              <Input
                 borderColor = {"#000"}
                 heigh = {12}
                 backgroundColor = {"rgba(217, 217, 217, 1)"}
                 borderBottomLeftRadius ={10}
                 borderBottomRightRadius = {10}
                 borderTopLeftRadius = {10}
                 borderTopRightRadius = {10}
                placeholder="Enter your name"
                value={"John Doe"}
                isDisabled={true}
                nativeID="accountHolderName"
                type="text"
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
                 borderColor = {"#000"}
                 heigh = {12}

                 backgroundColor = {"rgba(217, 217, 217, 1)"}
                 borderBottomLeftRadius ={10}
                 borderBottomRightRadius = {10}
                 borderTopLeftRadius = {10}
                 borderTopRightRadius = {10}
                placeholder="Account Number"
                value={"123456789"}
                isDisabled={true}
                nativeID="accountNumber"
                type="text"
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Bank Name
              </FormControl.Label>
              <Input
                placeholder="Bank Name"
                borderColor={"#000"}
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={"commercial bank"}
                isDisabled={true}
                nativeID="bankName"
                name = "bankName"
                type="number"
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Branch Name
              </FormControl.Label>
              <Input
                placeholder="Bank Name"
                borderColor={"#000"}
                height={12}
                backgroundColor={"rgba(217, 217, 217, 1)"}
                borderBottomLeftRadius={10}
                borderBottomRightRadius={10}
                borderTopLeftRadius={10}
                borderTopRightRadius={10}
                value={"colombo"}
                isDisabled={true}
                nativeID="branchName"
                type="text"
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Branch Code
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
                value={"123456"}
                isDisabled={true}
                nativeID="branchCode"
                type="number"
              />
            </FormControl>
            <Text style={styles.text}>
            Do you confirm/decline account details?
            </Text>
            <Flex direction="row">
            <Button style={styles.declineButton} >
              <Text style={styles.declineButtonText}>Decline</Text>
            </Button>
            <Button style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </Button>
            </Flex>
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  declineButton: {
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
    padding: 10,
    backgroundColor: "rgba(232, 248, 239, 1)",
    width: "45%",
    height: 60,
  },
  confirmButton: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
    padding: 10,
    backgroundColor: "rgba(56, 129, 11, 1)",
    width: "45%",
    height: 60,
  },
  declineButtonText: {
    color: "rgba(56, 129, 11, 1)",
    fontSize: 20,
    fontFamily: "Roboto",
  },
  confirmButtonText: {
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
    height: 120,
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
  text: {
    fontSize: 20,
    fontFamily: "Roboto", 
    color: "black",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 20,
    marginBottom: 10,
  },
});
