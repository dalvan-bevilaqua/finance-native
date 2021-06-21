import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #4caf50;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 200px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const SearchButton = styled.TouchableOpacity``;

export const LocationArea = styled.View`
  background-color: #ffffff;
  width: 350px;
  height: 50px;
  margin-top: 15px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LocationValues = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #272727;
  padding: 15px;
`;
