import express from "express";

import {
  addProduct,
  getProducts,
  getProductById,
  getMaxPriceComputers,
} from "../services/services.js";

const router = express.Router();

const productsTable = [];

router.get("/", async (req, res) => {
  console.log("ALL products huselt irlee");

  const result = await getProducts();

  res.json(result);
});

router.get("/:id", async (req, res) => {
  const requestId = req.params.id;
  console.log("ID product awah huselt", requestId);

  let result;
  if(requestId === 'maxprcprod') {
    result = await getMaxPriceComputers();
  } else {
    result = await getProductById(requestId);
  }
  res.status(200).send(result);
});

router.get("/?a+z", async (req, res) => {
  const { query } = req;
  const requestId = query.prod_no;
  console.log("Limittei product awah huselt", requestId);

  const result = await getProducts(requestId);
  res.status(200).send(result);
});

// router.get("/:maxprcprod", async (req, res) => {
//   const result = await getMaxPriceComputers();
//   res.status(200).send(result);
// });

router.post("/", async (req, res) => {
  console.log("Request ADD Product");
  productsTable.push(req.body);

  const prod = req.body;
  // ID hasaj vzeh
  await addProduct(
    prod.id,
    prod.name,
    prod.brandId,
    prod.categoryId,
    prod.desc,
    prod.sale,
    prod.price,
    prod.stock,
    prod.image
  );

  res.status(200).send(productsTable);
});

export default router;
