import Product from "../models/product.js";

export const getAllProduct = async (req, res) => {
  try {
    const { videoId } = req.params;

    const products = await Product.find({ videoId: videoId.toString() }).select(
      "_id link title price"
    );

    if (!products) {
      return res.status(404).json({
        message: "products by the video id are not found",
      });
    }

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        results: products.length,
        data: products,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
