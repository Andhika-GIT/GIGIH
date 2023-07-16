import express from "express";

import playlistsRouter from "../routes/playlists.js";

export const startRest = () => {
  // Make express server
  const app = express();

  app.use(express.json());

  app.use("/playlists", playlistsRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: "not found!",
    });
  });

  // Start the server
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};
