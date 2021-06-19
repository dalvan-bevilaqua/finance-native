import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
Icon.loadFont();

const TabArea = styled.View`
  height: 60px;
  background-color: #388e3c;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4caf50;
  margin-top: -20px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Principal")}>
        <Icon name="home" size={20} color="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo("Cadastro")}>
        <Icon name="logo-bitcoin" size={20} color="#FFF" />
      </TabItem>
      <TabItemCenter onPress={() => goTo("Cadastro")}>
        <Icon name="add-circle" size={35} color="#4caf50" />
      </TabItemCenter>
      <TabItem onPress={() => goTo("Detalhes")}>
        <Icon name="analytics" size={20} color="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo("Profile")}>
        <Icon name="settings" size={20} color="#FFF" />
      </TabItem>
    </TabArea>
  );
};
