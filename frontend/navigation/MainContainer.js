import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AddEvent from "./screens/eventsScreens/AddEvent";
import UpcomingEvent from "./screens/eventsScreens/UpcomingEvent";

//Screen names
const homeName = "Home";
const addEvent = "AddEvent";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
