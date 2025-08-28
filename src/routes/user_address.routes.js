import express from "express";
import {
  createAddress,
  getAllAddresses,
} from "../controllers/user_address_controllers.js";

export const routerUserAddress = express.Router();

routerUserAddress.get("/user_address", getAllAddresses);
routerUserAddress.post("/user_address", createAddress);
