import { View, StyleSheet, TouchableOpacity } from "react-native";
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

export default function () {
  const [donation, setDonation] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${Constants.URL}/api/moneyDonations`)
      .then((response) => {
        setDonation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(donation);

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
        Previous Donation
      </Box>
      <Box
        p="2"
        alignSelf={{ base: "center", md: "flex-start" }}
        mt="20%"
        rounded="xl"
        style={styles.header2}
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
        Plant Donation
      </Box>
      <VStack w="100%" space={5} alignSelf="center">
        <Input
          placeholder="Search upcoming donations here"
          width="95%"
          borderRadius="6"
          alignSelf={{ base: "center", md: "flex-start" }}
          py="3"
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
        data={donation}
        renderItem={({ item }) => (
          <Card style={styles.item} key={item._id}>
            {/* <Image source={""} style={styles.image} /> */}
            <Flex direction="row">
              <Image
                width={100}
                height={200}
                source={{
                  uri: item.image,
                }}
                alt="Alternate Text"
              />
              <Stack space={2} p="4" w="100%">
                <Heading style={styles.title1}>
                <Text style={styles.sub}> DONATOR :{item.eventName}</Text>
                </Heading>

                <Text style={styles.title}>
                  <Text style={styles.sub}> DONATED DATE : {item.date}</Text>
                </Text>
                <Text style={styles.title}>
                  <Text style={styles.sub}> AMOUNT :</Text> {item.amount}
                </Text>
              </Stack>
            </Flex>
          </Card>
        )}
      />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    alignSelf: "center",
    height: 60,
  },
  header2: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    height: 60,
  },
  container: {
    flex: 1,
    paddingTop: 22,
    borderRadius: 10,
  },
  item: {
    fontSize: 18,
    width: "95%",
    alignSelf: "center",
    height: "auto",
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    borderColor: "orange",
    borderWidth: 2,
    width: "30%",
    margin: 10,
    height: 50,
  },
  button1: {
    marginTop: 10,
    borderColor: "orange",
    borderWidth: 2,
    width: "30%",
    marginLeft: "auto",
    marginRight: 10,
    margin: 10,
    height: 50,
  },
  button2: {
    marginTop: 10,
    borderColor: "red",
    borderWidth: 2,
    width: "30%",
    margin: 10,
  },
  title: {
    fontSize: 18,
    margin: 10,
    fontWeight: "semibold",
  },
  title1: {
    margin: 5,
    fontSize: 28,
    padding: 5,
    paddingLeft: 14,
    paddingTop: 10,
  },
  sub: {
    fontWeight: "bold",
  },
  sub1: {
    fontWeight: "bold",
    fontSize: 22,
  },
  sub2: {
    fontWeight: "bold",

    color: "orange",
  },
  sub3: {
    fontWeight: "bold",
    color: "orange",
    marginLeft: 10,
  },
  sub5: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
