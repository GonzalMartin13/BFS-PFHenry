const { Router } = require("express")
const { createAdmin } = require("../controllers/postAdminControllers")
const { getAllAdminsHandler } = require("../handlers/getadminHandlers")
const { putAdmin } = require("../controllers/putAdmin")
const admin = Router()

admin.post("/", createAdmin)
admin.get("/", getAllAdminsHandler)
admin.put("/:adminId", putAdmin )



module.exports = admin