const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItems");

// to save menu item
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log(" menu data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to get menu item
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("menu item data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
