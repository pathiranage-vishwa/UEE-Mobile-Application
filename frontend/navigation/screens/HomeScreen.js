import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { Button, NativeBaseProvider } from "native-base";

export default function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text
          style={styles.header}
          onPress={() => navigation.navigate("AddEvent")}
        >
          {" "}
          City Creator{" "}
        </Text>
        <Text
          style={styles.header}
          onPress={() => navigation.navigate("AddMoneyDonation")}
        >
          {" "}
          Add Money Donation{" "}
        </Text>
        <Text
          style={styles.header}
          onPress={() => navigation.navigate("AddPlantDonation")}
        >
          {" "}
          Add Plant Donation{" "}
        </Text>
        <Text
          style={styles.header}
          onPress={() => navigation.navigate("DisplayAllDonations")}
        >
          {" "}
         Previous Donation{" "}
        </Text>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../assets/images/p1.jpg")}
          />
          <Text style={styles.text}>Date :</Text>
          <Text style={styles.text}>Location :</Text>
          <Text style={styles.text}>Participants :</Text>
          <Text style={styles.text}>Participants :</Text>
        </View>
        <Button onPress={() => navigation.navigate("UpcomingEvent")}>
          Upcoming Event
        </Button>
        <Button mt={10} onPress={() => navigation.navigate("EventDashboard")}>
          Event Dashboard
        </Button>
      </View>
    </NativeBaseProvider>
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
