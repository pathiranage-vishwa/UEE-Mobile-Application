import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AddEvent from "./screens/eventsScreens/AddEvent";
import UpcomingEvent from "./screens/eventsScreens/UpcomingEvent";
import EventDetails from "./screens/eventsScreens/EventDetails";
import CreateRequest from "./screens/requestsScreens/CreateRequest";
import Login from "./screens/AuthScreens/Login";
import UpdateEvent from "./screens/eventsScreens/UpdateEvent";
import Instructions from "./screens/eventsScreens/Instructions";
import EventDashboard from "./screens/eventsScreens/EventDashboard";
import PreviousEvents from "./screens/eventsScreens/PreviousEvents";
import PreviousDetails from "./screens/eventsScreens/PreviousDetails";

import Register from "./screens/AuthScreens/Register";


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
const eventDetails = "EventDetails";
const createRequest = "CreateRequest";
const login = "Login";

const updateEvent = "UpdateEvent";
const instructions = "Instructions";
const previousEvents = "PreviousEvents";
const previousDetails = "PreviousDetails";
const eventDashboard = "EventDashboard";
const register = "Register";


//Stack navigator
const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={register}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={register} component={Register} />
        <Stack.Screen name={addEvent} component={AddEvent} />
        <Stack.Screen name={upcomingEvent} component={UpcomingEvent} />
        <Stack.Screen name={eventDetails} component={EventDetails} />
        <Stack.Screen name={homeName} component={HomeScreen} />
        <Stack.Screen name={updateEvent} component={UpdateEvent} />
        <Stack.Screen name={instructions} component={Instructions} />
        <Stack.Screen name={previousEvents} component={PreviousEvents} />
        <Stack.Screen name={previousDetails} component={PreviousDetails} />
        <Stack.Screen name={eventDashboard} component={EventDashboard} />
        <Stack.Screen name={addMoneyDonation} component={AddMoneyDonation} />
        <Stack.Screen name={addPlantDonation} component={AddPlantDonation} />
        <Stack.Screen name={displayAllDonations} component={DisplayAllDonations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
