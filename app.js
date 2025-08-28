import dotenv from "dotenv";
import express from "express";
import { starDb } from "./src/config/database.js";
import { routerUser } from "./src/routes/user.routes.js";
import { routerTask } from "./src/routes/task.routes.js";
<<<<<<< HEAD
import { routerUserAddress } from "./src/routes/user_address.routes.js";
import { routerUserSkill } from "./src/routes/user_skills_inter.routes.js";
import { routerSkill } from "./src/routes/user_skills.routes.js";
=======
import { routerSkills } from "./src/routes/user_skills.routes.js";
import { routerAddress } from "./src/routes/user_address.routes.js";
>>>>>>> 3676b0298ac13da33e1dd12ad20a5f45c0ab0a93

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routerUser);
app.use("/api", routerTask);
<<<<<<< HEAD
app.use("/api", routerUserAddress);
app.use("/api", routerUserSkill);
app.use("/api", routerSkill);
=======
app.use("/api", routerSkills);
app.use("/api", routerAddress);
>>>>>>> 3676b0298ac13da33e1dd12ad20a5f45c0ab0a93

app.listen(port, async () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  await starDb();
});
