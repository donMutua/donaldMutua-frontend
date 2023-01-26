import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import launches from "./launches/launches.routes";
import auth from "./auth/auth.routes";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/login", auth);
router.use("/launches", launches);

export default router;
