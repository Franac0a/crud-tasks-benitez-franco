import { Router } from "express";
import {
  createAddress,
  getAllAddresses,
} from "../controllers/user_address_controllers.js";

export const routerUserAddress = Router();

routerUserAddress.get("/user_address", getAllAddresses);
routerUserAddress.post("/user_address", createAddress);
