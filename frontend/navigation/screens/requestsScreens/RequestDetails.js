import { NativeBaseProvider, Box, Flex, Button, Icon } from "native-base";
import React from "react";
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

export default function RequestDetails({ route, navigation }) {
  const [request, setRequest] = React.useState({});

  React.useEffect(() => {
    setRequest(route.params.item);
  }, [request]);

  const handleJoin = () => {
    //update request participants
    axios
      .put(`${Constants.URL}/api/requests/participants/${request._id}`)
      .then((response) => {
        Alert.alert("Success", "You have successfully joined the request");
        navigation.navigate("UpcomingRequest");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <NativeBaseProvider style={styles.container}>
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
        shadow={3}
      >
        {request.title}
      </Box>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={request.image ? { uri: request.image } : null}
        />

        <Text style={styles.sub}>
          <Text style={styles.date}>Location :</Text> {request.location}
        </Text>

        <Text style={styles.sub3}>
          gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        </Text>
      </View>
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
    width: "94%",
    marginBottom: 10,
    marginLeft: "3%",
    marginRight: "3%",
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
});
