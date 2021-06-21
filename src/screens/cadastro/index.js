import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Cadastro,
  InputText,
  Form,
  Texto,
  ButtomSave,
  TextoHeader,
  TextoButton,
} from "./styles";

import DatePicker from "react-native-datepicker";
import { DespesaService } from "../../service";
import { showMessage } from "react-native-flash-message";

export default () => {
  const [dtDebito, setDtDebito] = useState(new Date());
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");

  const salvar = async () => {
    if (descricao == "") {
      naoPodeSalvar("Favor informar a Descrição");
      return;
    }

    if (valor == 0) {
      naoPodeSalvar("Favor informar o Valor");
      return;
    }

    let dados = {
      descricao: descricao,
      valor: Number(valor),
      dt_cadastro: new Date(),
      dt_debito: dtDebito,
    };

    await DespesaService.save(dados);
    showMessage({
      message: "Informação",
      description: "Dados Salvos com sucesso.",
      type: "success",
    });
  };

  const alterarData = (valor) => {
    setDtDebito(valor);
  };

  const naoPodeSalvar = (mensagem) => {
    showMessage({
      message: "Dados não Salvos.",
      description: mensagem,
      type: "danger",
    });
  };

  return (
    <Cadastro>
      <TextoHeader>Despesa</TextoHeader>
      <Form>
        <Texto>Descrição: </Texto>
        <InputText
          onChangeText={(descricao) => setDescricao(descricao)}
        ></InputText>
        <Texto>Valor: </Texto>
        <InputText
          style={styles.valor}
          keyboardType="numeric"
          onChangeText={(valor) => setValor(valor)}
        ></InputText>
        <Texto>Data do Débito: </Texto>
        <DatePicker
          date={dtDebito}
          style={styles.dateComponente}
          onDateChange={alterarData}
          customStyles={{
            dateIcon: {
              display: "none",
            },
            dateInput: {
              fontSize: 36,
              borderRadius: 50,
              backgroundColor: "#efefef",
            },
          }}
        />

        <ButtomSave onPress={() => salvar()}>
          <TextoButton>Salvar</TextoButton>
        </ButtomSave>
      </Form>
    </Cadastro>
  );
};

const styles = StyleSheet.create({
  dateComponente: {
    width: 300,
  },
  valor: {
    textAlign: "center",
    fontSize: 15,
  },
});
