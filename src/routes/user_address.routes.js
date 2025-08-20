import { Router } from "express";
import {
  createAddress,
  getAllAddresses,
} from "../controllers/user_address_controllers.js";

export const routerAddress = express.Router();

routerTask.post("/address", createAddress);
routerTask.get("/address", getAllAddresses);
