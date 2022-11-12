import React, { useEffect, useState } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Alert,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  NativeBaseProvider,
  ScrollView,
  Center,
  Heading,
  Button,
  Box,
  VStack,
  FormControl,
  Input,
  Spacer,
  Select,
  CheckIcon,
  Flex,
  TextArea,
} from "native-base";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-modern-datepicker";
import Constants from "../../../constants/Constants";

export default function UpdateProfile({ route, navigation }) {
  const [user, setUser] = React.useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setUser(route.params.item);
    setName(route.params.item.name);
    setEmail(route.params.item.email);
    setContactNo(route.params.item.contactNo);
    setRole(route.params.item.role);
    setImage(route.params.item.image);
  }, [user]);

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.userMediaLibraryPermissionsAsync();

    //this tells the application to give an alert if someone doesn't allow //permission.  It will return to the previous screen.
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // No permissions user is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    let base64Img = `data:image/jpg;base64,${result.base64}`;
    uploadImage(base64Img);
  };

  //image upload start
  const uploadImage = (photo) => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "Chat-app");

    fetch("https://api.cloudinary.com/v1_1/donfmtaf4/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = () => {
    if (name === "") {
      Alert.alert("Please enter name");
      return;
    } else if (email === "") {
      Alert.alert("Please enter email address");
      return;
    } else if (contactNo === "") {
      Alert.alert("Please enter contact number");
      return;
    } else if (role === "") {
      Alert.alert("Please enter role");
      return;
    } else if (image === null) {
      Alert.alert("Please upload an image");
      return;
    }

    const data = {
      name,
      email,
      contactNo,
      role,
      image,
    };

    var url = `${Constants.URL}/api/users/${user._id}`;

    axios
      .put(url, data)
      .then((res) => {
        console.log(res.data);
        Alert.alert("User updated successfully");
        navigation.navigate("UpcomingUser");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async () => {
    console.log("cccccccccccxxx")
    await axios
      .delete(`${Constants.URL}/api/users/${user._id}`)
      .then((res) => {
        Alert.alert("User deleted successfully");
        navigation.navigate("UpcomingUser");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <NativeBaseProvider style={styles.main1}>
      <Box
        p="2"
        alignSelf={{ base: "center", md: "flex-start" }}
        mt="20%"
        rounded="xl"
        style={styles.header}
        _text={{
          fontSize: "32",
          fontWeight: "lg",
          color: "black",
          alignSelf: "center",
          letterSpacing: "lg",
        }}
        shadow={3}
      >
        Update Profile
      </Box>
      <Button
        shadow={3}
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
        Help ?
      </Button>

      <ScrollView style={styles.main}>
        <VStack style={styles.border}>
          <TouchableOpacity style={styles.imageCon} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image1} />
            ) : (
              <Image source={{ uri: user.image }} style={styles.image1} />
            )}
          </TouchableOpacity>
          <Spacer />
          <VStack width="90%" mx="3" ml={6} maxW="350px" alignSelf="center">
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Name
              </FormControl.Label>
              <Input
                placeholder="Full Name"
                borderColor={"#000"}
                value={name}
                height={12}
                onChangeText={(value) => setName(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Email
              </FormControl.Label>
              <Input
                placeholder="Email Address"
                borderColor={"#000"}
                value={email}
                height={12}
                onChangeText={(value) => setEmail(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Contact Number
              </FormControl.Label>
              <Input
                placeholder="Contact Number"
                borderColor={"#000"}
                height={12}
                value={contactNo}
                onChangeText={(value) => setContactNo(value)}
              />
            </FormControl>
            <FormControl isRequired mt={5}>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Role
              </FormControl.Label>
              <Input
                placeholder="User Location"
                borderColor={"#000"}
                value={role}
                w="100%"
                onChangeText={(value) => setRole(value)}
              />
            </FormControl>
            <Flex direction="row">
              <Button
                style={styles.button1}
                size="sm"
                backgroundColor={"rgba(26, 182, 92, 1)"}
                onPress={handleUpdate}
              >
                <Text style={styles.text1}>Update</Text>
              </Button>
              <Button
                style={styles.button2}
                size="sm"
                onPress={handleDelete}
                backgroundColor={"white"}
              >
                <Text style={styles.text2}>Delete</Text>
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
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
    margin: 10,
    padding: 10,
    backgroundColor: "rgba(26, 182, 92, 1)",
    width: "45%",
    marginLeft: "auto",
    height: 60,
  },
  uploadButtonText: {
    color: "#f6f5f8",
    fontSize: 20,
  },
  main1: {
    backgroundColor: "white",
  },
  border: {
    borderWidth: 2,
    borderColor: "green",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: "10%",
    backgroundColor: "white",
  },
  main: {
    marginTop: "10%",
    height: "100%",
  },
  image1: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 160,
  },
  imageCon: {
    marginTop: 20,
    borderRadius: 160,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,

    backgroundColor: "white",
    width: "90%",
    height: 300,
    marginBottom: 20,
  },
  image2: {
    width: "100%",
    resizeMode: "contain",
    height: "100%",
  },
  header: {
    backgroundColor: "rgba(230, 255, 214, 1)",
    width: "90%",
    alignSelf: "center",
    height: 60,
  },
  helpBtn: {
    backgroundColor: "rgba(26, 182, 92, 1)",
    width: "20%",
    alignSelf: "center",
    marginLeft: "70%",
    marginTop: "6%",
    color: "black",
    height: 70,
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
  button1: {
    marginTop: 20,
    width: "30%",
    marginLeft: 90,
    marginRight: 10,
    margin: 10,
    borderRadius: 10,
    height: 50,
  },
  button2: {
    marginTop: 20,
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 2,
    width: "30%",
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: "auto",
  },
  text1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
});
