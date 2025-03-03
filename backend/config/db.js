const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) => console.error("❌ Error en la conexión", err));

module.exports = pool;
