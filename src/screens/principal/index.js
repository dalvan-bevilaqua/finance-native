import React, { useState } from "react";
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationValues,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { DespesaService } from "../../service";
import { useMount } from "../../core/hooks";

Icon.loadFont();

export default () => {
  const [mes, setMes] = useState(1);
  const [despesas, setDespesas] = useState([]);
  const [vlTotalDespesas, setVlTotalDespesas] = useState(0);

  let meses = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro",
  };

  const avancar = () => {
    if (mes == 1) {
      setMes(12);
      return;
    }
    setMes(mes - 1);
  };

  const retroceder = () => {
    if (mes == 12) {
      setMes(1);
      return;
    }
    setMes(mes + 1);
  };

  const calcularTotal = () => {
    setVlTotalDespesas(0);

    var total = despesas.reduce(
      (valorAcomulado, despesa) => valorAcomulado + despesa.valor,
      0
    );
    setVlTotalDespesas(total);
  };

  useMount(async () => {
    const res = await DespesaService.findDespesas();
    setDespesas(res.data);
    calcularTotal();
  });

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <SearchButton onPress={() => avancar()}>
            <Icon name="ios-arrow-back" size={30} color="#FFF" />
          </SearchButton>

          <HeaderTitle>{meses[mes]}</HeaderTitle>

          <SearchButton onPress={() => retroceder()}>
            <Icon name="ios-arrow-forward" size={30} color="#FFF" />
          </SearchButton>
        </HeaderArea>

        {despesas.map((despesa) => (
          <LocationArea>
            <LocationValues>{despesa.descricao}</LocationValues>
            <LocationValues>{despesa.valor}</LocationValues>
          </LocationArea>
        ))}

        <LocationArea>
          <LocationValues>Total</LocationValues>
          <LocationValues>{vlTotalDespesas}</LocationValues>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
