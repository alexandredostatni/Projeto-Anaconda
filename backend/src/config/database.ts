import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Postgres conectado com sucesso!");
    await sequelize.sync({ alter: true });
  } catch (err) {
    console.error("Erro ao conectar ao Postgres:", err);
    process.exit(1);
  }
};
