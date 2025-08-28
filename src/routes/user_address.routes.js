<<<<<<< HEAD
import express from "express";
=======
import { Router } from "express";
>>>>>>> 3676b0298ac13da33e1dd12ad20a5f45c0ab0a93
import {
  createAddress,
  getAllAddresses,
} from "../controllers/user_address_controllers.js";

<<<<<<< HEAD
export const routerUserAddress = express.Router();

routerUserAddress.get("/user_address", getAllAddresses);
routerUserAddress.post("/user_address", createAddress);
=======
export const routerAddress = Router();

routerAddress.post("/address", createAddress);
routerAddress.get("/address", getAllAddresses);
>>>>>>> 3676b0298ac13da33e1dd12ad20a5f45c0ab0a93
