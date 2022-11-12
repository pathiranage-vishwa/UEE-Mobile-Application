import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "../../../constants/Constants";
import axios from "axios";
import {
  VStack,
  Image,
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

export default function CommunityFeed({ navigation }) {
  const [share, setShare] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${Constants.URL}/api/shares`)
      .then((response) => {
        setShare(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [share]);

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
        Community Feed
      </Box>
      <Button
        style={styles.button3}
        backgroundColor={"rgba(26, 182, 92, 1)"}
        onPress={() => navigation.navigate("ShareEvent")}
      >
        Share Event
      </Button>
      <ScrollView>
        <FlatList
          data={share}
          renderItem={({ item }) => (
            <View style={styles.card} key={item._id} shadow={1}>
              {/* <Image source={""} style={styles.image} /> */}
              <Flex direction="row">
                <Image
                  style={styles.image}
                  source={
                    item.image
                      ? { uri: item.image }
                      : require("../../../assets/images/p1.jpg")
                  }
                  alt="image base"
                />
                <Stack space={2} p="4" w="100%">
                  <Heading size="sm" ml="-1" style={styles.title1}>
                    {item.name}
                  </Heading>

                  <Text style={styles.sub1}>
                    <Text style={styles.date}>DATE : </Text> {item.date}
                  </Text>

                  <Text style={styles.sub}>{item.caption}</Text>
                  {/* flex two button */}
                  <Flex direction="row">
                    <Button
                      style={styles.button1}
                      size="sm"
                      onPress={() =>
                        navigation.navigate("Comments", {
                          item: item,
                        })
                      }
                      backgroundColor={"rgba(26, 182, 92, 1)"}
                    >
                      <Text style={styles.text1}>Comments</Text>
                    </Button>
                  </Flex>
                </Stack>
              </Flex>
            </View>
          )}
        />
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "rgba(230, 255, 214, 1)",
    height: 60,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingTop: 22,
    borderRadius: 10,
  },

  button1: {
    marginTop: "5%",
    width: "30%",
    marginLeft: 80,
    marginRight: 10,
    margin: 10,
    borderRadius: 10,
    height: 40,
  },
  button3: {
    marginTop: "5%",
    width: "30%",
    marginLeft: "auto",
    marginBottom: 20,
    marginRight: 10,
    margin: 10,
    borderRadius: 10,
    height: 40,
  },
  button2: {
    marginTop: 20,
    borderColor: "red",
    borderWidth: 2,
    width: "24%",
    borderRadius: 10,
    margin: 10,
  },

  title1: {
    margin: 1,
    fontSize: 24,
    padding: 5,
    alignItems: "center",
    paddingLeft: 14,
    width: "60%",
    paddingTop: 10,
  },
  date: {
    color: "rgba(26, 182, 92, 1)",
  },
  sub: {
    fontWeight: "bold",
    fontSize: 16,
    width: "50%",
  },
  sub1: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  sub2: {
    fontWeight: "bold",
    color: "orange",
  },

  image: {
    width: 160,
    height: "100%",
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  card: {
    width: "96%",
    marginBottom: 20,
    marginLeft: "2%",
    marginRight: "2%",
    height: "auto",
    paddingBottom: 0,
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
  text1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});
