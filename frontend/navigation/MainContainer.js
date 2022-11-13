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
import Login from "./screens/AuthScreens/Login";
import UpdateEvent from "./screens/eventsScreens/UpdateEvent";
import Instructions from "./screens/eventsScreens/Instructions";
import EventDashboard from "./screens/eventsScreens/EventDashboard";
import PreviousEvents from "./screens/eventsScreens/PreviousEvents";
import PreviousDetails from "./screens/eventsScreens/PreviousDetails";
import AddProcess from "./screens/processScreens.js/AddProcess";
import DisplayProcess from "./screens/processScreens.js/DisplayProcess";
import DisplayAccount from "./screens/AccountScreens.js/DisplayAccount";
import DonationUpcomingEvent from "./screens/donatsScreens/DonationUpcomingEvent";
import ProcessUpCommingEvent from "./screens/processScreens.js/ProcessUpCommingEvent";
import DonationDash from "./screens/donatsScreens/DonationDash";
import UpdatePlantDonation from "./screens/donatsScreens/UpdatePlantDonation";

import Register from "./screens/AuthScreens/Register";

import AddMoneyDonation from "./screens/donatsScreens/AddMoneyDonation";
import AddPlantDonation from "./screens/donatsScreens/AddPlantDonation";
import DisplayAllDonations from "./screens/donatsScreens/DisplayAllDonations";
import DisplayDonations from "./screens/donatsScreens/DisplayDonations";
import UpdateMoneyDonation from "./screens/donatsScreens/UpdateMoneyDonation";

import JoinEvent from "./screens/CommunityScreens/JoinEvent";
import DisplayJoinEvents from "./screens/CommunityScreens/DisplayJoinEvents";
import ShareEvent from "./screens/CommunityScreens/ShareEvent";
import CommunityFeed from "./screens/CommunityScreens/CommunityFeed";
import Comments from "./screens/CommunityScreens/Comments";
import AddComment from "./screens/CommunityScreens/AddComment";
import RequestDashboard from "./screens/requestsScreens/RequestDashboard";
import UpgradeUser from "./screens/AuthScreens/upgrade_user";
import AllUsers from "./screens/AuthScreens/AllUsers";
import CreateRequest from "./screens/requestsScreens/CreateRequest";
import UpdateRequest from "./screens/requestsScreens/UpdateRequest";
import AllRequestedEvents from "./screens/requestsScreens/AllRequestedEvents";
import RequestDetails from "./screens/requestsScreens/RequestDetails";
import UpdateProfile from "./screens/AuthScreens/UpdateProfile";
import AllRequestedEventsEdit from "./screens/requestsScreens/AllRequestedEventsEdit";

//Screen names
const homeName = "Home";
const addEvent = "AddEvent";
const addMoneyDonation = "AddMoneyDonation";
const addPlantDonation = "AddPlantDonation";
const displayAllDonations = "DisplayAllDonations";
const displayDonations = "DisplayDonations";
const updateMoneyDonation = "UpdateMoneyDonation";
const updatePlantDonation = "UpdatePlantDonation";
const addProcess = "AddProcess";
const displayProcess = "DisplayProcess";
const displayAccount = "DisplayAccount";
const upcomingEvent = "UpcomingEvent";
const eventDetails = "EventDetails";
const donationUpcomingEvent = "DonationUpcomingEvent";
const processUpCommingEvent = "ProcessUpCommingEvent";
const donationDash = "DonationDash";
const createRequest = "CreateRequest";
const login = "Login";
const profile = "Profile";
const joinEvent = "JoinEvent";

const requestDashboard = "RequestDashboard";
const updateEvent = "UpdateEvent";
const instructions = "Instructions";
const previousEvents = "PreviousEvents";
const previousDetails = "PreviousDetails";
const eventDashboard = "EventDashboard";
const register = "Register";
const drawer = "Drawer";
const displayJoinEvents = "DisplayJoinEvents";
const shareEvent = "ShareEvent";
const communityFeed = "CommunityFeed";
const comments = "Comments";
const addComment = "AddComment";
const upgradeUser = "UpgradeUser";
const allUsers = "AllUsers";
const updateRequest = "UpdateRequest";
const allRequestedEvents = "AllRequestedEvents"
const requestDetails = "RequestDetails"
const updateProfile = "UpdateProfile"
const allRequestedEventsEdit = "AllRequestedEventsEdit"

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
        <Stack.Screen name={displayAllDonations} component={DisplayAllDonations} />
        <Stack.Screen name={displayDonations} component={DisplayDonations} />
        <Stack.Screen name={updateMoneyDonation} component={UpdateMoneyDonation} />
        <Stack.Screen name={addProcess} component={AddProcess} />
        <Stack.Screen name={displayProcess} component={DisplayProcess} />
        <Stack.Screen name={displayAccount} component={DisplayAccount} />
        <Stack.Screen name={donationUpcomingEvent} component={DonationUpcomingEvent} />
        <Stack.Screen name={processUpCommingEvent} component={ProcessUpCommingEvent} />
        <Stack.Screen name={donationDash} component={DonationDash} />
        <Stack.Screen name={updatePlantDonation} component={UpdatePlantDonation} />
        <Stack.Screen name={createRequest} component={CreateRequest} />
        <Stack.Screen name={login} component={Login} />
        <Stack.Screen name={joinEvent} component={JoinEvent} />
        <Stack.Screen name={displayJoinEvents} component={DisplayJoinEvents} />
        <Stack.Screen name={shareEvent} component={ShareEvent} />
        <Stack.Screen name={communityFeed} component={CommunityFeed} />
        <Stack.Screen name={comments} component={Comments} />
        <Stack.Screen name={addComment} component={AddComment} />
        <Stack.Screen name={requestDashboard} component={RequestDashboard} />
        <Stack.Screen name={upgradeUser} component={UpgradeUser} />
        <Stack.Screen name={allUsers} component={AllUsers} />
        <Stack.Screen name={login} component={Login} />
        <Stack.Screen name={createRequest} component={CreateRequest} />
        <Stack.Screen name={updateRequest} component={UpdateRequest} />
        <Stack.Screen name={allRequestedEvents} component={AllRequestedEvents} />
        <Stack.Screen name={requestDetails} component={RequestDetails} />
        <Stack.Screen name={updateProfile} component={UpdateProfile} />
        <Stack.Screen name={allRequestedEventsEdit} component={AllRequestedEventsEdit} />
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
      <Drawer.Screen name={upgradeUser} component={UpgradeUser} />
    </Drawer.Navigator>
  );
}

export default MainContainer;
