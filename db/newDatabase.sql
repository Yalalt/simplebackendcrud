CREATE DATABASE mern_db;


--- TEST- JOIN prod cat brand
SELECT prod.id, prod.name, prod.created_date, prod.description, prod.sale, prod.price, prod.stock, prod.image, cat.name AS cat_name, bra.name AS brand_name FROM product prod LEFT JOIN category cat ON prod.category_id = cat.id LEFT JOIN brand bra ON prod.brand_id = bra.id limit 10;

SELECT * FROM product prod LEFT JOIN category ON prod.category_id = category.id LEFT JOIN brand ON prod.brand_id = brand.id;

--- Category ID by search
SELECT prod.id, prod.name, prod.created_date, prod.description, prod.sale, prod.price, prod.stock, prod.image, cat.name AS cat_name, bra.name AS brand_name FROM product prod LEFT JOIN category cat ON prod.category_id = cat.id LEFT JOIN brand bra ON prod.brand_id = bra.id WHERE cat.id = 1001;

--- Brand by product find
SELECT prod.id, prod.name, prod.created_date, prod.description, prod.sale, prod.price, prod.stock, prod.image, cat.name AS cat_name, bra.name AS brand_name FROM product prod LEFT JOIN category cat ON prod.category_id = cat.id LEFT JOIN brand bra ON prod.brand_id = bra.id WHERE bra.id = 2003;