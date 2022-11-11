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
import AddProcess from "./screens/processScreens.js/AddProcess";
import DisplayProcess from "./screens/processScreens.js/DisplayProcess";
import DisplayAccount from "./screens/AccountScreens.js/DisplayAccount";

import Register from "./screens/AuthScreens/Register";


import AddMoneyDonation from "./screens/donatsScreens/AddMoneyDonation";
import AddPlantDonation from "./screens/donatsScreens/AddPlantDonation";
import DisplayAllDonations from "./screens/donatsScreens/DisplayAllDonations";
import DisplayDonations from "./screens/donatsScreens/DisplayDonations";
import UpdateMoneyDonation from "./screens/donatsScreens/UpdateMoneyDonation";

//Screen names
const homeName = "Home";
const addEvent = "AddEvent";
const addMoneyDonation = "AddMoneyDonation";
const addPlantDonation = "AddPlantDonation";
const displayAllDonations = "DisplayAllDonations";
const displayDonations = "DisplayDonations";
const updateMoneyDonation = "UpdateMoneyDonation";
const addProcess = "AddProcess";
const displayProcess = "DisplayProcess";
const displayAccount = "DisplayAccount";
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
        <Stack.Screen name={displayDonations} component={DisplayDonations} />
        <Stack.Screen name={updateMoneyDonation} component={UpdateMoneyDonation} />
        <Stack.Screen name={addProcess} component={AddProcess} />
        <Stack.Screen name={displayProcess} component={DisplayProcess} />
        <Stack.Screen name={displayAccount} component={DisplayAccount} />
        <Stack.Screen name={createRequest} component={CreateRequest} />
        <Stack.Screen name={login} component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
