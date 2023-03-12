import express from "express";

import {
  addProduct,
  getProducts,
  getProductById,
  getMaxPriceComputers,
  getProductByBrandId,
  getProductByCategoryId,
} from "../services/services.js";

const router = express.Router();

const productsTable = [];

router.get("/?", async (req, res) => {
  const { query } = req;

  console.log("Prod_no songoson");
  const result = await getProducts(Number(query.prod_no));
  res.status(200).send(result);
});

router.get("/category/?", async (req, res) => {
  console.log("Category songoson");
  const { query } = req;
  console.log("Cat ID ", query.name);

  const result = await getProductByCategoryId(Number(query.name));
  res.status(200).send(result);
});

router.get("/brand/?", async (req, res) => {
  console.log("Brand songoson");
  const { query } = req;
  console.log("Brand ID ", query.name);

  const result = await getProductByBrandId(Number(query.name));
  res.status(200).send(result);
});

router.get("/", async (req, res) => {
  console.log("ALL products huselt irlee");

  const result = await getProducts();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const requestId = req.params.id;
  console.log("ID product awah huselt", requestId);

  let result;
  if (requestId === "maxprcprod") {
    result = await getMaxPriceComputers();
  } else {
    result = await getProductById(requestId);
  }
  res.status(200).send(result);
});

// router.get("/:maxprcprod", async (req, res) => {
//   const result = await getMaxPriceComputers();
//   res.status(200).send(result);
// });

router.post("/", async (req, res) => {
  console.log("Request ADD Product");
  
  const { name, brandId, categoryId, desc, sale, price, stock, image } =
  req.body;

  const newProduct = {
    name, brandId, categoryId, desc, sale, price, stock, image
  };
  
  productsTable.push(newProduct);
  await addProduct(newProduct);
  
  res.status(200).send(newProduct);
});

export default router;
