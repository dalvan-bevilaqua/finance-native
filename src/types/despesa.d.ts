export type Despesas = {
  nuMes?: number;
  nuAno?: number;
  despesas?: Array<DataDespesas>;
};

export type DataDespesas = {
  descricao?: String;
  valor?: number;
  dataEntrada?: String;
  dataLancamento?: String;
};
