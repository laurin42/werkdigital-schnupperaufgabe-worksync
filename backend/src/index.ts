import dotenv from "dotenv";
import express from "express";
import { db } from "./db/client";
import { seed } from "./scripts/seed";
import loginRouter from "./routes/login";
import profileRouter from "./routes/profile";
import workSessionRouter from "./routes/workSession";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

//LOGIN ROUTING
app.use("/api/login", loginRouter);

//PROFILE ROUTING
app.use("/api/profile", profileRouter)

//HOME OFFICE TIME START AND END

app.use("/api/worksession", workSessionRouter)

//START SERVER
async function startServer() {
  try {
    //console.log("seed database");
    //await seed();

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();