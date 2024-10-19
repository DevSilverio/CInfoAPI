import express from "express";
import mongoose from "mongoose";
import main from "./routes/ClientInfoRoutes.js";
import { connectToDatabase, storeClientInfo } from "./utils/db.js";

import { EventEmitter } from "events";
EventEmitter.defaultMaxListeners = 20;

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  await connectToDatabase();

  await main();

  res.send("Informações obtidas e logadas no console.");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
