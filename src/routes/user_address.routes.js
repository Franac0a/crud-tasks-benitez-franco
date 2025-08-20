import { Router } from "express";
import {
  createAddress,
  getAllAddresses,
} from "../controllers/user_address_controllers.js";

export const routerAddress = Router();

routerAddress.post("/address", createAddress);
routerAddress.get("/address", getAllAddresses);
