import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Principal from "../screens/principal";
import Cadastro from "../screens/cadastro";
import Detalhes from "../screens/detalhes";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Detalhes" component={Detalhes} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
