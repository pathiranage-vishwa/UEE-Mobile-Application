import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
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
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
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
        >
          Event Dashboard
        </Box>
        <ScrollView>
          <Flex direction="row" style={styles.container}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../../../assets/images/previous.png")}
              />
              <Flex direction="row" style={styles.cardContent}>
                <Text style={styles.text1}>Previous Events</Text>
                <Button
                  style={styles.button1}
                  size="sm"
                  onPress={() => navigation.navigate("PreviousEvents")}
                  backgroundColor={"rgba(26, 182, 92, 1)"}
                >
                  <Text style={styles.textBtn1}>View</Text>
                </Button>
              </Flex>
            </View>

            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../../../assets/images/create.png")}
              />
              <Flex direction="row" style={styles.cardContent}>
                <Text style={styles.text1}>Create Event</Text>
                <Button
                  style={styles.button1}
                  size="sm"
                  onPress={() => navigation.navigate("AddEvent")}
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
              source={require("../../../assets/images/upcoming.png")}
            />
            <Flex direction="row" style={styles.cardContent}>
              <Text style={styles.text2}>Upcoming Events</Text>
              <Button
                style={styles.button2}
                size="sm"
                onPress={() => navigation.navigate("UpcomingEvent")}
                backgroundColor={"rgba(26, 182, 92, 1)"}
              >
                <Text style={styles.textBtn1}>View</Text>
              </Button>
            </Flex>
          </View>

          <View style={styles.card2}>
            <Image
              style={styles.image2}
              source={require("../../../assets/images/request.png")}
            />
            <Flex direction="row" style={styles.cardContent}>
              <Text style={styles.text2}>Event Requests</Text>
              <Button
                style={styles.button2}
                size="sm"
                onPress={() => navigation.navigate("AllRequestedEvents")}
                backgroundColor={"rgba(26, 182, 92, 1)"}
              >
                <Text style={styles.textBtn1}>View</Text>
              </Button>
            </Flex>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
    marginTop: 35,
    marginLeft: "1%",
    marginRight: "2%",
    height: 200,
    paddingBottom: 15,
    marginBottom: 20,
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
    width: "95%",
    alignSelf: "center",
    height: 160,
    marginTop: -30,
    marginBottom: 10,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image2: {
    width: "75%",
    marginTop: -35,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
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
    marginBottom: 15,
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
