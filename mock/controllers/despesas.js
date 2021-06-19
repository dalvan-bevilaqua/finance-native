exports.getDespesas = function (req, res) {
  res.json({
    data: [
      {
        cdDespesa: 1,
        nuMes: "1",
        nuAno: "2021",
        descricao: "Parcela Caixa",
        valor: 400.0,
        dataEntrada: "2021-01-10",
        dataLancamento: "2021-01-10",
      },
      {
        cdDespesa: 2,
        nuMes: "1",
        nuAno: "2021",
        descricao: "Abastecimento",
        valor: 200.0,
        dataEntrada: "2021-01-10",
        dataLancamento: "2021-01-10",
      },
      {
        cdDespesa: 3,
        nuMes: "1",
        nuAno: "2021",
        descricao: "Academia",
        valor: 76.9,
        dataEntrada: "2021-01-10",
        dataLancamento: "2021-01-10",
      },
    ],
    totalPages: 1,
    quantidadeTotalRegistro: 2,
  });
};
