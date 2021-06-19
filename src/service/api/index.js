import axios from "axios";

const config = {
  headers: {},
};
const BaseApi = axios.create(config);

export default BaseApi;
