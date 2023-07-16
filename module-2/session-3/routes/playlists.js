import express from "express";

// controllers
import { addNew, getAll, getDetail } from "../controllers/playlists";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", addNew);

export default router;
