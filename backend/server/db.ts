import { Pool } from "pg"
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER!,
  database: process.env.DB_NAME!,
};

const pool = new Pool(dbConfig);

export default pool;