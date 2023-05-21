const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const router = require("./router/routes");
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/", router);
app.listen(PORT, () => console.log("server is listening"));
