import express from "express";
import dotenv from "dotenv";
//import {  } from "./src/routes/user.routes.js";
//import { starDb } from "./src/config/database.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
//app.use("/api",);

app.listen(port, async () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  await starDb();
});
