const express = require("express");
const cors = require("cors");
const app = express();
port = 3099;

const configureDb = require("./config/database");
const router = require("./config/routes");

app.use(express.json());
app.use(cors());
app.use(router);
configureDb();

app.listen(port, () => {
  console.log("server running on port", port);
});
