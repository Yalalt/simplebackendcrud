import express from "express";
import { addCategory, getCategory } from "../services/services.js";

const router = express.Router();

let categoryTable = [];

router.get("/", async (req, res) => {
  const result = await getCategory();
  res.send({ status: "GET request", data: result });
});

router.post("/", async (req, res) => {
  console.log("Add category huselt irlee");

  categoryTable.push(req.body);
  await addCategory(req.body.id, req.body.name);
  res.status(200).send(categoryTable);
});

export default router;
