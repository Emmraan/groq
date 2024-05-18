const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
})

.get("/chat", async (req, res) => {
  try {
    // Render the initial page with empty response
    res.render("chat", { response: "" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

module.exports = router;
