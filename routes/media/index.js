const express = require("express")
const router = express.Router()

const controller = require("./media.controller")
const { get } = require("./media.validator")
const middleware = require("../../middlewares/middleware")

router.get("/", middleware(get.joiSchema), controller.get)

module.exports = router
