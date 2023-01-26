import { Router } from "express";
import { authJwt } from "../../middleware/auth";

import { getAllLaunches, getOneLaunch } from "./launches.handlers";

const router = Router();

router.get("/", authJwt, getAllLaunches);
router.get("/:id", authJwt, getOneLaunch);

export default router;
