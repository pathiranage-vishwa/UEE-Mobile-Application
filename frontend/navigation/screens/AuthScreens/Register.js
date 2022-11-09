import React from "react";
import { Alert, View, Text, StyleSheet, Image } from "react-native";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default function Register({ navigation }) {
  const [userId, setId] = React.useState("");
  const [role, setRole] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");

  const image = { uri: "https://reactjs.org/logo-og.png" };

  const register = () => {
    if (name == "" || email == "" || password == "") {
      Alert.alert("Please fill all the fields");
    } else {
      const user = {
        name: name,
        email: email,
        password: password,
        contactNumber: contactNumber,
        confirmPassword: confirmPassword,
      };

      var url = `http://192.168.1.100:5000/api/users/`;

      axios
        .post(url, user)
        .then((response) => {
          console.log(response.data);
          Alert.alert("User created successfully");
          navigation.navigate("Login");
        })
        .catch((error) => {
          Alert.alert(error.response.data.msg);
        });
    }
  };

  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="0" w="90%" maxW="340" py="12">
          <Heading
            onPress={() => navigation.navigate("Login")}
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs"
          >
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Full Name</FormControl.Label>
              <Input height={50} onChangeText={(name) => setName(name)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email Address</FormControl.Label>
              <Input
                type="email"
                height={50}
                onChangeText={(email) => setEmail(email)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contact Number</FormControl.Label>
              <Input
                height={50}
                type="contactNumber"
                onChangeText={(contactNumber) => setContactNumber(contactNumber)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                height={50}
                type="password"
                onChangeText={(password) => setPassword(password)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input height={50} type="password"
              onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
              />
            </FormControl>
            <Button height={50} mt="2" colorScheme="orange" onPress={register}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
