import { pool } from "../config/mysql_config.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(
    "SELECT * FROM product limit ?",
    limit ? limit : 10
  );

  return rows;
}

export async function getProductById(prodId) {
  const [rows] = await pool.query("SELECT * FROM product WHERE id = ?", prodId);

  return rows;
}

export async function addProduct(
  id,
  name,
  brandId,
  categoryId,
  desc,
  sale,
  price,
  stock,
  image
) {
  const registerDate = new Date().toISOString().slice(0, 10);

  await pool.query(
    "INSERT INTO product VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      id,
      name,
      brandId,
      categoryId,
      registerDate,
      desc,
      sale,
      price,
      stock,
      image,
    ]
  );
}

export async function addCategory(catId, catName) {
  await pool.query("INSERT INTO category VALUES (?, ?)", [catId, catName]);
}

export async function getCategory() {
  const [rows] = await pool.query("SELECT * FROM category");
  return rows;
}

export async function addWishList(id, userId, prodId) {
  await pool.query("INSERT INTO wishlist VALUES (?, ?, ?)", [
    id,
    userId,
    prodId,
  ]);
}

export async function getWishList() {
  const [rows] = await pool.query("SELECT * FROM wishlist");
  return rows;
}

export async function addSpecification(specId, prodId, property, value) {
  await pool.query("INSERT INTO specification VALUES (?, ?, ?, ?)", [
    specId,
    prodId,
    property,
    value,
  ]);
}

export async function addUser(
  id,
  name,
  role,
  password,
  email,
  contact,
  address1,
  address2,
  userImage
) {
  let registerDate = new Date()
    .toISOString()
    .slice(0, 10)
    .concat(" ", new Date().toISOString().slice(11, 19));

  await pool.query("INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
    id,
    name,
    role,
    password,
    email,
    contact,
    address1,
    address2,
    userImage,
    registerDate,
  ]);
}

export async function getSpecification() {
  const [rows] = await pool.query("SELECT * FROM specification");
  return rows;
}

export async function getUserById(userId) {
  const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", userId);
  return rows;
}

export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM user");
  return rows;
}

export async function getWishlistUserList() {
  const [rows] = await pool.query(
    "SELECT * FROM user RIGHT JOIN wishlist ON user.id = wishlist.user_id"
  );
  return rows;
}

export async function getMaxPriceComputers() {
  const [rows] = await pool.query(
    "SELECT * FROM product WHERE price=(SELECT MAX(price) FROM product INNER JOIN category ON product.category_id IN(SELECT id FROM category WHERE id = 1001))"
  );
  return rows;
}
