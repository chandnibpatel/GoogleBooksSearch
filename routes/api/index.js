const router = require("express").Router();
const googleRoutes = require("./google");
const booksRoutes = require("./books");

// Book routes
router.use("/google", googleRoutes);
router.use("/books", booksRoutes);

module.exports = router;
