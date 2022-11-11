import { View, StyleSheet, TouchableOpacity, Image,Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "../../../constants/Constants";
import axios from "axios";
import moment from "moment";
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

export default function DisplayProcess ({ navigation }) {
  const [processData, setProcessData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    axios
      .get(`${Constants.URL}/api/tasks`)
      .then((response) => {
        setProcessData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [processData]);


  //create a funtion to delete a process
  const deleteProcess = (id) => {

    //ask the user to confirm the deletion
    Alert.alert(  
      'Delete Process',
      'Are you sure you want to delete this process?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => {
          axios
          .delete(`${Constants.URL}/api/tasks/${id}`)
          .then((response) => {
            console.log(response.data);
          }
          )
          .catch((error) => {
            console.log(error);
          }
          );
        } }
      ],
      { cancelable: false }
    );
  };


  //serach processData
  // const searchprocessData = (title) => {
  //   axios
  //     .get(`${Constants.URL}/api/processDatas/search?title=${title}`)
  //     .then((response) => {
  //       setProcessData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleView = (item) => {
  //   console.log(item_id);
  //   navigation.navigate("processDataDetails", {
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
          style={styles.header1}
          _text={{
            fontSize: "32",
            fontWeight: "medium",
            color: "rgba(57, 73, 41, 1)",
            alignSelf: "center",
            letterSpacing: "lg",
            fontFamily: "Roboto",
          }}
        >
          Event process deatils
        </Box>
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Search processDatas here"
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
          data={processData}
          renderItem={({ item }) => (
            <View style={styles.card} key={item._id} shadow={1}>
              {/* <Image source={""} style={styles.image} /> */}
              <Flex direction="row">
                <Stack space={1} p="4" w="100%">
                  <Text style={styles.sub}>
                  <Text style={styles.date}>Task Name : </Text>{item.taskName}
                    </Text>

                  <Text style={styles.sub1}>
                    <Text style={styles.date}>Start date : </Text> {moment(item.startDate).format("DD-MM-YYYY")}
                  </Text>

                  <Text style={styles.sub1}>
                    <Text style={styles.date}>End date : </Text> {moment(item.endDate).format('DD-MM-YYYY')}
                  </Text>
                  <Text style={styles.sub}>
                    <Text style={styles.date}>Cost :</Text> {item.cost}
                  </Text>

                  <Text style={styles.subArea}>
                    <Text style={styles.date}>Discription about :</Text> {item.taskDescription}
                  </Text>
                  {/* flex two button */}
                  <Flex direction="row">
                    <Button
                      style={styles.button}
                      size="sm"
                      onPress={() => {
                        deleteProcess(item._id);
                      }}
                    >
                      <Text style={styles.text1}>Delete</Text>
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
  header1: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "95%",
    alignSelf: "center",
    height: 60,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: 22,
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    borderColor: "rgba(255, 6, 6, 1)",
    backgroundColor: "white",
    borderWidth: 2,
    width: "24%",
    borderRadius: 10,
    marginLeft: "75%",
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
    color: "rgba(124, 194, 81, 1)",
  },
  sub: {
    fontWeight: "bold",
    fontSize: 16,
    width: "90%",
  },
  subArea: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
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
    height: 230,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  card: {
    width: "96%",
    marginBottom: 10,
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
    color: "rgba(255, 6, 6, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    color: "rgba(26, 182, 92, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
});
