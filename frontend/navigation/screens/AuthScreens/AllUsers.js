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

export default function ({ navigation }) {
  const [user, setUser] = React.useState([]);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    axios
      .get(`${Constants.URL}/api/users`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  //serach user
  // const searchUser = (title) => {
  //   axios
  //     .get(`${Constants.URL}/api/users/search?title=${title}`)
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleView = (item) => {
  //   console.log(item_id);
  //   navigation.navigate("UserDetails", {
  //     id: item._id,
  //   });
  // };

  return (
    <NativeBaseProvider>
      <ScrollView>
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
          ALL USERS
        </Box>
        <Button
        shadow={3}
        onPress={() => navigation.navigate("PendingUsersApprove")}
        _text={{
          color: "white",
          fontSize: "lg",
          alignSelf: "center",
          fontWeight: "medium",
          letterSpacing: "lg",

          shadow: 3,
        }}
        style={styles.helpBtn}
      >
        Manage Pending Users
      </Button>
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Search upcoming users here"
            width="95%"
            borderRadius="6"
            alignSelf={{ base: "center", md: "flex-start" }}
            py="3"
            mb={5}
            px="1"
            backgroundColor="rgba(230, 255, 214, 1)"
            marginTop={5}
            fontSize="14"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="black"
                as={<MaterialIcons name="search" />}
              />
            }
          />
        </VStack>

        <FlatList
          data={user}
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
                />
                <Stack space={2} p="4" w="100%">
                  <Heading size="sm" ml="-1" style={styles.title1}>
                    {item.name}
                  </Heading>

                  <Text style={styles.sub}>
                    <Text style={styles.date}>Role :</Text> {item.role}
                  </Text>
                  {/* flex two button */}
                  <Flex direction="row">
                    <Button
                      style={styles.button2}
                      size="sm"
                      onPress={() =>
                        navigation.navigate("UpdateProfile", {
                          item: item,
                        })
                      }
                      backgroundColor={"white"}
                    >
                      <Text style={styles.text2}>View</Text>
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
    height: 60,
  },
  container: {
    flex: 1,
    paddingTop: 22,
    borderRadius: 10,
  },

  button1: {
    marginTop: 20,
    width: "24%",
    marginLeft: -10,
    marginRight: 10,
    margin: 10,
    borderRadius: 10,
    height: 50,
  },
  button2: {
    marginTop: 20,
    borderColor: "rgba(26, 182, 92, 1)",
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
    width: 150,
    height: 150,
    borderRadius: 110,
  },
  card: {
    width: "96%",
    marginBottom: 10,
    marginLeft: "2%",
    marginRight: "2%",
    height: 230,
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
    color: "rgba(26, 182, 92, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
  helpBtn: {
    backgroundColor: "rgba(26, 182, 92, 1)",
    width: "80%",
    alignSelf: "center",
    marginTop: "6%",
    color: "black",
    height: 50,
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
