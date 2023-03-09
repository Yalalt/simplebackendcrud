import express from "express";
import {
  addSpecification, getSpecification,
} from "../services/services.js";

const router = express.Router();

let specificationTable = [];

router.get("/", async (req, res) => {
  const result = await getSpecification();
  res.send({status: "GET request hariug butsaalaa. OK", data: result});
});

router.post("/", async (req, res)=> {
    console.log("Create Specification huselt");
    
    const spec = req.body;
    specificationTable.push(spec);
    await addSpecification(
        spec.specId,
        spec.prodId,
        spec.property,
        spec.value
    );

    res.status(200).send(specificationTable);
});

export default router;
