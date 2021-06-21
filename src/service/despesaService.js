import Api from "./api";
import { FINANCE_SERVICE } from "./api/constants";

export const findDespesas = async (filtro) => {
  const res = await Api.get(`${FINANCE_SERVICE}/v1/despesa`, {
    params: filtro,
  });
  return res;
};

export const save = async (data) => {
  const res = await Api.post(`${FINANCE_SERVICE}/v1/despesa/save`, data);
};
