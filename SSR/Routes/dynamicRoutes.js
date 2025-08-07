const express = require("express");
const dynamicRouter = express.Router();
const UserController = require("../Controller/UserController.js");
const {isAuthenticatedAdmin} = require("../middlewares/isAuthenticated.js");



// Dynamic route for user registration
dynamicRouter.post("/register", UserController.register);
dynamicRouter.post("/login", UserController.login);
dynamicRouter.get("/editUser/:id",isAuthenticatedAdmin, UserController.editUser);
dynamicRouter.post("/editUser/:id",isAuthenticatedAdmin, UserController.updateUser);
dynamicRouter.get("/deleteUser/:id",isAuthenticatedAdmin, UserController.deleteUSer);

module.exports = dynamicRouter;
