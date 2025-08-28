import express from "express";
import dotenv from "dotenv";
import { starDb } from "./src/config/database.js";
import { routerUser } from "./src/routes/user.routes.js";
import { routerTask } from "./src/routes/task.routes.js";
import { routerUserAddress } from "./src/routes/user_address.routes.js";
import { routerUserSkill } from "./src/routes/user_skills_inter.routes.js";
import { routerSkill } from "./src/routes/user_skills.routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routerUser);
app.use("/api", routerTask);
app.use("/api", routerUserAddress);
app.use("/api", routerUserSkill);
app.use("/api", routerSkill);

app.listen(port, async () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  await starDb();
});
