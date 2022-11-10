import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
import JoinEvent from "./screens/CommunityScreens/JoinEvent";
import { Hidden } from "native-base";

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
const profile = "Profile";
const joinEvent = "JoinEvent";

const updateEvent = "UpdateEvent";
const instructions = "Instructions";
const previousEvents = "PreviousEvents";
const previousDetails = "PreviousDetails";
const eventDashboard = "EventDashboard";
const register = "Register";
const drawer = "Drawer";

//Stack navigator
const Stack = createNativeStackNavigator();
//Drawer navigator
const Drawer = createDrawerNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={drawer} component={DrawerFun} />

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
        <Stack.Screen
          name={displayAllDonations}
          component={DisplayAllDonations}
        />
        <Stack.Screen name={joinEvent} component={JoinEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerFun() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerActiveBackgroundColor: "rgba(230, 255, 214, 1)",
        drawerActiveTintColor: "rgba(26, 182, 92, 1)",
        drawerInactiveTintColor: "black",
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
        drawerContentContainerStyle: {
          marginTop: 20,
          borderRadius: 10,
        },
        drawerStyle: {
          backgroundColor: "white",
          width: 280,
        },

        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === profile) {
            iconName = "person";
          } else if (route.name === homeName) {
            iconName = "home";
          } else if (route.name === register) {
            iconName = "add-circle";
          } else if (route.name === eventDashboard) {
            iconName = "people";
          } else if (route.name === upcomingEvent) {
            iconName = "calendar";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={40} color={color} />;
        },
      })}
      //add icon to drawer
    >
      <Stack.Screen name={register} component={Register} />
      <Drawer.Screen name={homeName} component={HomeScreen} />
      <Drawer.Screen name={eventDashboard} component={EventDashboard} />
      <Drawer.Screen name={upcomingEvent} component={UpcomingEvent} />
    </Drawer.Navigator>
  );
}

export default MainContainer;
