/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = express.Router();
const corsUtils = require("./utils/cors.js");
const app = express();

//##############
const despesas = require("./controllers/despesas.js");

//##############

app.use(bodyParser.json());
app.use(cookieParser());
app.use(corsUtils.crossOrigin);

router.get("/v1/despesas", despesas.getDespesas);

app.use("/finance", router);

app.listen(4200, function () {
  console.log("OK");
});
