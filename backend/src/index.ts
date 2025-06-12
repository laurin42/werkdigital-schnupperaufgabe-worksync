import dotenv from "dotenv";
import { db } from "./db/client";

dotenv.config();

// Testing the connection between backend and database
async function connectionTest() {
    try{
      console.log("DB URL:", process.env.DATABASE_URL);
      const result = await db.execute("SELECT 1");
      console.log("Database connection successfull:", result);  
    } catch (error) {
        console.error("Database connection Error", error);
    }
}

connectionTest()