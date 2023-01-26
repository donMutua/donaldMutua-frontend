import { Router } from "express";

import { auth } from "./auth.handler";

const router = Router();

router.post("/", auth);

export default router;
