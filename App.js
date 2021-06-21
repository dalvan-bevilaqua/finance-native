import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import FlashMessage from "react-native-flash-message";
import { View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#455a64" barStyle="light-content" />
      <NavigationContainer>
        <MainStack />
        <FlashMessage position="top" />
      </NavigationContainer>
    </View>
  );
}
