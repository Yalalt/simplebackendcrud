import express from "express";

import {
  addWishList,
  getWishList,
} from "../services/services.js";

const router = express.Router();

const wishlistsTable = [];

router.get("/", async (req, res) => {
  const result = await getWishList();
  res.send({status: "GET request hariug butsaalaa. OK", data: result});
});


router.post("/", async (req, res) => {
  console.log("Add wishlist huselt irlee");
  
  wishlistsTable.push(req.body);
  await addWishList(req.body.id, req.body.userId, req.body.prodId);
  res.status(200).send(wishlistsTable);
});

export default router;
