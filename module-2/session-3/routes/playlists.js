import express from "express";

// controllers
import { addNew, getAll, getDetail } from "../controllers/playlists.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", addNew);

export default router;
