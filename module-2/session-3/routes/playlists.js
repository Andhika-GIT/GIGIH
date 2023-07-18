import express from "express";

// controllers
import {
  addNew,
  getAll,
  getDetail,
  playSong,
} from "../controllers/playlists.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:title", getDetail);
router.get("/play/:title", playSong);
router.post("/", addNew);

export default router;
