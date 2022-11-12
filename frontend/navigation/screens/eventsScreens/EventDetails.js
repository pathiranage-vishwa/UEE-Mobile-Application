import {
  NativeBaseProvider,
  Box,
  Flex,
  Button,
  Icon,
  AlertDialog,
  ScrollView,
} from "native-base";
import React from "react";
import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import Constants from "../../../constants/Constants";

export default function EventDetails({ route, navigation }) {
  const [event, setEvent] = React.useState({});

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  React.useEffect(() => {
    setEvent(route.params.item);
  }, [event]);

  return (
    
    <NativeBaseProvider style={styles.container}>
      
      <Box
        p="2"
        alignSelf={{ base: "center", md: "flex-start" }}
        mt="20%"
        
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
        {event.title}
      </Box>
      <ScrollView>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={event.image ? { uri: event.image } : null}
        />
        <Flex direction="row">
          {/* group icon with text */}
          <Flex direction="row" alignItems="center" mr="2" ml={5}>
            <Icon as={<MaterialIcons name="group" />} size="xl" color="black" />
            <Text style={styles.iGroup}>{event.participants} Joined</Text>
          </Flex>

          <Button
            style={styles.button2}
            size="sm"
            onPress={() => navigation.navigate("JoinEvent", { item: event })}
            backgroundColor={"rgba(26, 182, 92, 1)"}
          >
            <Flex direction="row" alignItems="center" mr="2" m={1}>
              <Text style={styles.text1}>Join</Text>
              <Icon
                as={<MaterialIcons name="group" />}
                size="lg"
                color="white"
                ms="2"
              />
            </Flex>
            
          </Button>
        </Flex>

        <Text style={styles.sub1}>
          <Text style={styles.date}>Date : </Text> {event.date}
        </Text>

        <Text style={styles.sub}>
          <Text style={styles.date}>Location :</Text> {event.location}
        </Text>

        <Text style={styles.sub}>
          <Text style={styles.date}>Status :</Text> {event.status}
        </Text>
        <Text style={styles.sub3}>{event.description}</Text>
        <Button style={styles.button4} 
        size="sm"
         backgroundColor={"rgba(232, 248, 239, 1)"}
          onPress={() => navigation.navigate("DisplayAllDonations", {
            item: event,
          })
        }
         >
              <Flex direction="row" alignItems="center" mr="2" m={1}>
              <Text style={styles.seeAllButtonText}>See All</Text>
              <Icon
                as={<MaterialIcons name="arrow-right" />}
                size="lg"
                color="black"
                ms="2"
              />
              </Flex>
            </Button>
        <Button style={styles.uploadButton} 
          size="sm"
          onPress={() => navigation.navigate("DonationDash", {
            item: event,
          })
        }
        >
              <Text style={styles.uploadButtonText}>Donate Now</Text>
            </Button>
      </View>
      </ScrollView>
      {/* Alert Dialog */}
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Customer</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    height: 60,
  },
  card: {
    marginTop: 20,
    width: "90%",
    marginBottom: 10,
    marginLeft: "5%",
    height: "auto",
    paddingBottom: 15,
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  },
  date: {
    color: "rgba(26, 182, 92, 1)",
  },
  sub: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    width: "100%",
  },
  sub1: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  sub3: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 15,
    width: "90%",
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
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    marginLeft: "auto",
  },
  button4: {
    marginTop: 20,
    borderColor: "rgba(26, 182, 92, 1)",
    borderWidth: 2,
    width: "30%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    marginLeft: "auto",
  },
  button3: {
    marginTop: 20,
    borderColor: "rgba(26, 182, 92, 1)",
    borderWidth: 2,
    width: "24%",
    borderRadius: 10,
    margin: 10,
  },
  text1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginEnd: 5,
  },
  text2: {
    color: "rgba(26, 182, 92, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
  iGroup: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(26, 182, 92, 1)",
    marginLeft: 10,
  },
  uploadButton: {
    borderRadius: 30,
    marginTop: 130,
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
  seeAllButtonText: {
    color: "rgba(26, 182, 92, 1)",
    fontSize: 20,
    fontFamily: "Roboto",
  },
});
