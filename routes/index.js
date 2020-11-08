var express = require("express")
var router = express.Router()

const media = require("./media")
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
})
router.use("/media", media)

module.exports = router
