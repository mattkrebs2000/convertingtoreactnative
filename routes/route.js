const express = require("express");
let router = express.Router();

userRoute = require("../controllerfunctions/controllers")

router.get("/todos", (req, res) => {
    res.send("this is what shal appearrrrrrr")
});

router.get("/hello", userRoute.controller);

module.exports = router;