// In this modele, we use some functions like Math.random(),
// Math.floor(), and Array.from() to generate some fake data.
// When building user interfaces, it can be helpful to
// mock out simplified versions of the data that our code
// will eventually fetch from backend servers

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  "/categories": ["Shirts", "Pants", "Shoes", "Accessories"],
  "/items?category=Shirts": ["T-Shirts", "Casual", "Formal"],
  "/items?category=Pants": ["Long Pants", "Sweat Pants", "Shorts", "Swimwear"],
  "/items?category=Shoes": ["Athletic", "Professional", "Casual", "Walking"],
  "/items?category=Accessories": ["Hats", "Wallets", "Belts"],
};
