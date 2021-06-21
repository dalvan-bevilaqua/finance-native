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
  const [dataFiltro, setDataFiltro] = useState(new Date());
  const [mes, setMes] = useState(dataFiltro.getMonth());
  const [ano, setAno] = useState(dataFiltro.getFullYear());

  const [despesas, setDespesas] = useState([]);
  const [vlTotalDespesas, setVlTotalDespesas] = useState(0);

  let meses = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro",
  };

  const nextAndBack = (value) => {
    var month = dataFiltro.getMonth() + value;
    var date = dataFiltro;
    date.setMonth(month);
    setMes(date.getMonth());
    setAno(date.getFullYear());
    setDataFiltro(date);
    getDespesa();
  };

  const calcularTotal = async (data) => {
    total = await data.reduce(
      (valorAcomulado, despesa) => valorAcomulado + Number(despesa.valor),
      0
    );

    setVlTotalDespesas(total);
  };

  const definirMesInicial = () => {
    setMes(dataFiltro.getMonth());
  };

  useMount(async () => {
    getDespesa();
    definirMesInicial();
  });

  const getDespesa = async () => {
    const res = await DespesaService.findDespesas({ dtReferencia: dataFiltro });
    await setDespesas(res.data);
    calcularTotal(res.data);
  };

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <SearchButton onPress={() => nextAndBack(-1)}>
            <Icon name="ios-arrow-back" size={30} color="#FFF" />
          </SearchButton>

          <HeaderTitle>
            {meses[mes]}/{ano}
          </HeaderTitle>

          <SearchButton onPress={() => nextAndBack(+1)}>
            <Icon name="ios-arrow-forward" size={30} color="#FFF" />
          </SearchButton>
        </HeaderArea>

        {despesas.map((despesa, index) => (
          <LocationArea key={index}>
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
