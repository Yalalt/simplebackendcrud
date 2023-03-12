import express from "express";
import { addBrand, getBrand, getLastBrandId } from "../services/services.js";

const router = express.Router();

let brandsTable = [];

router.get("/", async (req, res) => {
  const result = await getBrand();
  res.json({ status: true, result });
});

router.post("/", async (req, res) => {
  console.log("Add brand huselt irlee");

  const oldData = await getLastBrandId();
  
  console.log(oldData[0].maxid);

  const newBrand = {
    id: oldData[0].maxid+1,
    name: req.body.name
  };

  brandsTable.push(newBrand);
  console.log("BRAND ", newBrand);

  await addBrand(newBrand.id, newBrand.name);
  
  res.status(200).send(brandsTable);
});

export default router;


// http://localhost:3008/newbrand