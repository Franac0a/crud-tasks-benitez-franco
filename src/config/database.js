import { Sequelize } from "sequelize";
import dotenv from dotenv;

dotenv.config()


export const sequelize = new Sequelize (
    process.env.DB_USER,
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    {
       host:  process.env.HOST || localhost,
       dialect: process.env.DB_DIALECT || mysql
    }
);

export const starDb = async () => {
  await sequelize.authenticate();

  await sequelize.sync();
  console.log("Se establecio conexion con la db");
};
