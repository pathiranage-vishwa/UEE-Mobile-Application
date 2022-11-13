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
  ScrollView,
  Spacer,
} from "native-base";
import axios from "axios";
import Constants from "../../../constants/Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    card: {
    width: "90%",
    marginBottom: 10,
    marginLeft: "5%",
    height: "auto",
    marginTop: 10,

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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
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

export default function Register({ navigation }) {
  const [userId, setId] = React.useState("");
  const [role, setRole] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");

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

      var url = `${Constants.URL}/api/users/`;

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
          <ScrollView style={styles.main}>
          <View >
            <Image
              style={styles.image}
              source={require("../../../assets/images/login.jpg")}
            />
          </View>
          <Heading
            onPress={() => navigation.navigate("Home")}
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
                onChangeText={(contactNumber) =>
                  setContactNumber(contactNumber)
                }
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
              <Input
                height={50}
                type="password"
                onChangeText={(confirmPassword) =>
                  setConfirmPassword(confirmPassword)
                }
              />
            </FormControl>
            <Button style={styles.uploadButton} onPress={register}>
              <Text style={styles.uploadButtonText}> Sign up</Text>
            </Button>
          </VStack>
          </ScrollView>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
