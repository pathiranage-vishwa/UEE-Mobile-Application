import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AddEvent from "./screens/eventsScreens/AddEvent";
import UpcomingEvent from "./screens/eventsScreens/UpcomingEvent";
import AddMoneyDonation from "./screens/donatsScreens/AddMoneyDonation";
import AddPlantDonation from "./screens/donatsScreens/AddPlantDonation";
import DisplayAllDonations from "./screens/donatsScreens/DisplayAllDonations";

//Screen names
const homeName = "Home";
const addEvent = "AddEvent";
const addMoneyDonation = "AddMoneyDonation";
const addPlantDonation = "AddPlantDonation";
const displayAllDonations = "DisplayAllDonations";
const upcomingEvent = "UpcomingEvent";

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
        <Stack.Screen name={upcomingEvent} component={UpcomingEvent} />
        <Stack.Screen name={addMoneyDonation} component={AddMoneyDonation} />
        <Stack.Screen name={addPlantDonation} component={AddPlantDonation} />
        <Stack.Screen name={displayAllDonations} component={DisplayAllDonations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
