const { Router } = require("express");
const UserController  = require("../controllers/UserController");
const userRoutes = Router();
const userController = new UserController;

userRoutes.get("/", (req, res) => res.json({"message": "Users Route online"}));
userRoutes.get("/:id", userController.show);
userRoutes.post("/", userController.create);
userRoutes.put("/:id", userController.update);

module.exports = userRoutes;