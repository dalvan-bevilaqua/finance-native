import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import Principal from "../screens/principal";
import MainTab from "../stacks/MainTab";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="MainTab"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
