import express from "express";

// controllers
import { getAllComment } from "../controllers/comment";
import { getAllProduct } from "../controllers/product";
import { getAllVideo } from "../controllers/video";

const router = express.Router();

router.get("/video-thumbnail", getAllVideo);
router.get("/product/:videoId", getAllProduct);
router.get("/comment/:videoId", getAllComment);
router.post("/comment");

export default router;
