import Api from "./api";
import { FINANCE_SERVICE } from "./api/constants";

export const findDespesas = async () => {
  const res = await Api.get(`${FINANCE_SERVICE}/v1/despesa`);
  return res;
};
