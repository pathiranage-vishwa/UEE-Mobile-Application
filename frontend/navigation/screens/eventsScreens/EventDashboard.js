import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "../../../constants/Constants";
import axios from "axios";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  FlatList,
  Box,
  Divider,
  Heading,
  ScrollView,
  Card,
  Flex,
  Stack,
  Container,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function EventDashboard({ navigation }) {
  //open gmail when click on button with to and subject
  const sendEmail = () => {
    Linking.openURL(
      'mailto: "sarangahettiarachchi1999@gmail.com" ?subject= Reject the request  &body= I am sorry to inform you that your request has been rejected'
    );
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
      >
        Event Dashboard
      </Box>
      <ScrollView>
        <Flex direction="row" style={styles.container}>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/wing.png")}
            />
            <Flex direction="row" style={styles.cardContent}>
              <Text style={styles.text1}>Previous Events</Text>
              <Button
                style={styles.button1}
                size="sm"
                onPress={() =>
                  navigation.navigate("PreviousDetails", {
                    item: item,
                  })
                }
                backgroundColor={"rgba(26, 182, 92, 1)"}
              >
                <Text style={styles.textBtn1}>View</Text>
              </Button>
            </Flex>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/wing.png")}
            />
            <Flex direction="row" style={styles.cardContent}>
              <Text style={styles.text1}>Create Event</Text>
              <Button
                style={styles.button1}
                size="sm"
                onPress={() =>
                  navigation.navigate("PreviousDetails", {
                    item: item,
                  })
                }
                backgroundColor={"rgba(26, 182, 92, 1)"}
              >
                <Text style={styles.textBtn1}>Go</Text>
              </Button>
            </Flex>
          </View>
        </Flex>
        <View style={styles.card2}>
          <Image
            style={styles.image2}
            source={require("../../../assets/images/wing.png")}
          />
          <Flex direction="row" style={styles.cardContent}>
            <Text style={styles.text2}>Upcoming Events</Text>
            <Button
              style={styles.button2}
              size="sm"
              onPress={() =>
                navigation.navigate("PreviousDetails", {
                  item: item,
                })
              }
              backgroundColor={"rgba(26, 182, 92, 1)"}
            >
              <Text style={styles.textBtn1}>View</Text>
            </Button>
          </Flex>
        </View>

        <View style={styles.card2}>
          <Image
            style={styles.image2}
            source={require("../../../assets/images/wing.png")}
          />
          <Flex direction="row" style={styles.cardContent}>
            <Text style={styles.text2}>Event Requests</Text>
            <Button
              style={styles.button2}
              size="sm"
              onPress={() =>
                navigation.navigate("PreviousDetails", {
                  item: item,
                })
              }
              backgroundColor={"rgba(26, 182, 92, 1)"}
            >
              <Text style={styles.textBtn1}>View</Text>
            </Button>
          </Flex>
        </View>

        <View style={styles.container}>
          <Button onPress={() => navigation.navigate("PreviousEvents")}>
            previous Events
          </Button>
          <Button m={10} onPress={sendEmail}>
            open Email
          </Button>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  header: {
    width: "90%",
    alignSelf: "center",
    height: 60,
    backgroundColor: "rgba(230, 255, 214, 1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  card: {
    width: "46%",
    marginTop: 30,
    marginLeft: "1%",
    marginRight: "2%",
    height: 200,
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 24.43,
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
    height: 130,
    resizeMode: "cover",
    zIndex: 1,
    position: "relative",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  },

  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    width: "50%",
    marginTop: 10,
    marginLeft: 10,
  },

  card2: {
    width: "82%",
    marginBottom: 10,
    marginTop: 40,
    marginLeft: "8%",
    marginRight: "8%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 24.43,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image2: {
    width: "60%",
    height: 150,
    resizeMode: "cover",
    alignSelf: "center",
    zIndex: 1,
  },
  text2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
    marginLeft: 10,
  },
  button1: {
    width: "38%",
    marginLeft: "1%",
    marginTop: 10,
    margin: 10,
    borderRadius: 10,
    height: 38,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  button2: {
    width: "27%",
    marginLeft: "12%",
    marginTop: 20,

    borderRadius: 10,
    height: 43,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textBtn1: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
  },
});
