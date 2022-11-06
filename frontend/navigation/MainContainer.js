import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AddEvent from "./screens/eventsScreens/AddEvent";
//import AddDonation from "./screens/donatsScreens/AddDonation";

//Screen names
const homeName = "Home";
const addEvent = "AddEvent";
const addDonation = "AddDonation";

//Stack navigator
const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={homeName}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={homeName} component={HomeScreen} />
        <Stack.Screen name={addEvent} component={AddEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
