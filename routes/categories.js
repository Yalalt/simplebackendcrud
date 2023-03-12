import express from "express";
import { addCategory, getCategory, getLastCatId } from "../services/services.js";

const router = express.Router();

let categoryTable = [];

router.get("/", async (req, res) => {
  const result = await getCategory();
  res.json({ status: true, result });
});

router.post("/", async (req, res) => {
  console.log("Add category huselt irlee");

  const oldData = await getLastCatId();
  
  console.log(oldData[0].maxid);

  const newCategory = {
    id: oldData[0].maxid+1,
    name: req.body.name
  };

  categoryTable.push(newCategory);

  await addCategory(newCategory.id, newCategory.name);
  
  res.status(200).send(categoryTable);
});

export default router;
