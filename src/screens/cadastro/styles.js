import React from "react";
import styled from "styled-components/native";

export const Cadastro = styled.SafeAreaView`
  background-color: #4caf50;
  flex: 1;
`;

export const TextoHeader = styled.Text`
  padding: 20px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  width: 90%;
`;

export const Form = styled.SafeAreaView`
  background-color: #ffffff;

  padding: 30px;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  align-items: center;
`;

export const Texto = styled.Text`
  color: #000000;
  padding: 20px;
  width: 100%;
`;

export const TextoButton = styled.Text`
  color: #fff;
  padding: 20px;
  font-size: 15px;
  font-weight: bold;
`;

export const InputText = styled.TextInput`
  background-color: #e8e8e8;
  width: 90%;
  border-radius: 10px;
  padding: 10px;
  padding-right: 20px;
  text-align: center;
`;

export const ButtomSave = styled.TouchableOpacity`
  margin-top: 15%;
  border-radius: 50px;
  background-color: #4caf50;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
