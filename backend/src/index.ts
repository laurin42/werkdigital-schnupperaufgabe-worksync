import dotenv from "dotenv";
import express from "express";
import { db } from "./db/client";
import { seed } from "./scripts/seed";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;


async function startServer() {
  try {
    console.log("seed database");
    await seed();

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();