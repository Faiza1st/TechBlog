// import modules
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRouthes = require("./blogRouthes");
const commentRoutes = require("./commentRoutes");

// routes
router.use("/users", userRoutes);
router.use("/blog", blogRouthes); 
router.use("/comments", commentRoutes); 

// export
module.exports = router;