import express from "express";

// controllers
import { getAllComment, createComment } from "../controllers/comment.js";
import { getAllProduct } from "../controllers/product.js";
import { getAllVideo } from "../controllers/video.js";

const router = express.Router();

router.get("/video-thumbnail", getAllVideo);
router.get("/product/:videoId", getAllProduct);
router.get("/comment/:videoId", getAllComment);
router.post("/comment/:videoId", createComment);

export default router;
