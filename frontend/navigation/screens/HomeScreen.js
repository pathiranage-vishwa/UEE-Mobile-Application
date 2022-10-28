import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> City Creator </Text>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../../assets/images/wing.png")}
        />
        <Text style={styles.text}>Date :</Text>
        <Text style={styles.text}>Location :</Text>
        <Text style={styles.text}>Participants :</Text>
        <Text style={styles.text}>Participants :</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "92%",
    marginBottom: 10,
    marginLeft: "4%",
    marginRight: "4%",
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
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
    marginLeft: 10,
    marginBottom: 10,
  },
});
