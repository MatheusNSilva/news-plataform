import { Router } from "express";
import { UserController } from "../modules/user/controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/users", (req, res, next) => {
  userController.create(req, res, next).catch(next);
});

export { userRoutes };
