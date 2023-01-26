import express from "express";
import cors from "cors";
import MessageResponse from "./interfaces/MessageResponse";
import api from "./api";
import { authJwt } from "./middleware/auth";

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
