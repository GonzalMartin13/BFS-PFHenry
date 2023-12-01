const { Router } = require("express")
const { createAdmin } = require("../controllers/postAdminControllers")
const { getAllAdminsHandler } = require("../handlers/getadminHandlers")
const admin = Router()

admin.post("/", createAdmin)
admin.get("/", getAllAdminsHandler)



module.exports = admin