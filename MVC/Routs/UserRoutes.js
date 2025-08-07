const express = require("express");
const router = express.Router();
let UserController = require("../Controller/UserConyroller.js");

router.get("/", UserController.show);
router.post("/insertData", UserController.insertData);
router.get("/fetchData", UserController.fetchData);
router.get("/singleUser/:id", UserController.singleUser);
router.put("/updateUser/:id", UserController.updateUser);
router.delete("/deleteUser/:id", UserController.deleteUser);

module.exports = router;

























