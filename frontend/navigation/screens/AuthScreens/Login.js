import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

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
  const [isSelected, setSelection] = useState([]);

  const login = async () => {
    if (email == "" || password == "") {
      Alert.alert("Please fill all the fields");
    } else {
      const user = {
        email: email,
        password: password,
      };
      if (isSelected) {
        var url = `http://192.168.8.144:5000/api/supplier/supplierlogin`;
      } else {
        var url = `http://192.168.8.144:5000/api/users/login`;
      }

      await axios
        .post(url, user)
        .then((response) => {
          Alert.alert("successfully logged in");
          AsyncStorage.setItem("id", response.data.user._id);
          AsyncStorage.setItem("name", response.data.user.name);
          AsyncStorage.setItem("email", response.data.user.email);
          AsyncStorage.setItem("role", response.data.user.role);
          navigation.navigate("BottomBar");
        })
        .catch((error) => {
          Alert.alert(error.response.data.msg);
        });
    }
  };

  return (
    <NativeBaseProvider>
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
          <Heading
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
            <Checkbox
              colorScheme="orange"
              value={isSelected}
              onChange={setSelection}
            >
              <Text fontSize="sm" ml="2" color="coolGray.800">
                Login as a Supplier
              </Text>
            </Checkbox>
            <Button mt="2" colorScheme="orange" height={50} onPress={login}>
              Sign in
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
    width: "100%",
    height: 320,
    resizeMode: "cover",
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
});
