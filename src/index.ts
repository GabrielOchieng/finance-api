import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI =
  "mongodb+srv://ogingagabriel:4N6sMe1EGdGOYd2S@personalfinancetracker.pg9qkg1.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MONGODB database"))
  .catch((error) =>
    console.error("Failed to connect to MONGODB database", error)
  );

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
