import express from "express";

import {
  addUser,
  getUsers,
  getUserById,
  getWishlistUserList,
} from "../services/services.js";

const router = express.Router();

const usersTable = [];

router.get("/", async (req, res) => {
  console.log("All user request received");

  const result = await getUsers();
  res.send({ status: "Successfull send user data", data: result });
});

router.get("/uwl", async (req, res) => {
  const result = await getWishlistUserList();
  res.send({
    status: "Successfull RIGHT JOIN send with wish list user data",
    data: result,
  });
});

router.get("/:id", async (req, res) => {
  console.log("All user request received");
  const { query } = req;
  const userID = query.id;
  const result = await getUserById(userID);
  res.send({ status: "Successfull send user data", data: result });
});

router.post("/", async (req, res) => {
  console.log("User ADD 0_0 /");

  const usr = req.body;
  usersTable.push(usr);
  // id <-----, name, role, password, email, contact, address1, address2, userImage, userDate
  await addUser(
    usr.id,
    usr.name,
    usr.role,
    usr.password,
    usr.email,
    usr.contact,
    usr.address1,
    usr.address2,
    usr.user_image
  );
  res.status(200).send(usersTable);
});

export default router;