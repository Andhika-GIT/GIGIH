import express from 'express';

const router = express.Router();

router.get('/video-thumbnail');
router.get('/product/:videoId');
router.get('/comment/:videoId');
router.post('/comment');
