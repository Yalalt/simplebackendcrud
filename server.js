import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import productRoutes from "./routes/product.js";
import userRoutes from "./routes/users.js";
import categoriesRoutes from "./routes/categories.js";
import specificationRoutes from "./routes/specification.js";
import wishlistRoutes from "./routes/wishlist.js";

dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/category", categoriesRoutes);
app.use("/specification", specificationRoutes);
app.use("/wishlist", wishlistRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT} port...`);
});
