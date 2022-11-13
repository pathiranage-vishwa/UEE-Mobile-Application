import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "../../../constants/Constants";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Checkbox,
} from "native-base";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { URL } from "../../constants/Constants";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = async () => {
    if (email == "" || password == "") {
      Alert.alert("Please fill all the fields");
    } else {
      const user = {
        email: email,
        password: password,
      };

      var url = `${Constants.URL}/api/users/login`;

      await axios
        .post(url, user)
        .then((response) => {
          Alert.alert("successfully logged in");
          AsyncStorage.setItem("id", response.data.user._id);
          AsyncStorage.setItem("name", response.data.user.name);
          AsyncStorage.setItem("email", response.data.user.email);
          AsyncStorage.setItem("role", response.data.user.role);
          navigation.navigate("Home");
        })
        .catch((error) => {
          Alert.alert(error.response.data.msg);
        });
    }
  };

  return (
    <NativeBaseProvider style={styles.main1}>
      <Center w="100%">
        <Box safeArea p="0" py="8" w="100%" maxW="340">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            Welcome
          </Heading>
          <ScrollView style={styles.main}>
          <View >
            <Image
              style={styles.image}
              source={require("../../../assets/images/login2.png")}
            />
          </View>
          <Heading
          onPress={() => navigation.navigate("Home")}
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input height={50} onChangeText={(email) => setEmail(email)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                height={50}
                type="password"
                onChangeText={(password) => setPassword(password)}
              />
            </FormControl>

            <Button style={styles.uploadButton} onPress={login}>
              <Text style={styles.uploadButtonText}> Sign up</Text>
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Text
                onPress={() => navigation.navigate("Register")}
                style={{ fontSize: 16, color: "orange" }}
                _text={{
                  color: "green.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
              >
                Sign Up
              </Text>
            </HStack>
          </VStack>
          </ScrollView>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "120%",
    height: 320,
    marginLeft: -30,
    resizeMode: "cover",
  },
  main1: {
    backgroundColor: "white",
  },
  formInput: {
    marginTop: 20,
    padding: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#a7a7a7",
    borderRadius: 10,
    height: 50,
  },
  defaultButton: {
    padding: 15,
    backgroundColor: "#0e8c19",
    borderRadius: 10,
    width: "50%",
    alignSelf: "center",
    marginLeft: 130,
  },
  FormBorder: {
    borderWidth: 1,
    borderColor: "#a7a7a7",
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    alignSelf: "center",
  },
  uploadButton: {
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
    margin: 12,
    padding: 10,
    backgroundColor: "rgba(26, 182, 92, 1)",
    width: "45%",
    height: 70,
  },
  uploadButtonText: {
    color: "#f6f5f8",
    fontSize: 20,
  },
});
