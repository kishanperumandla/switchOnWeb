import { Router } from "express";
import { loginController, registerController } from "../../controllers/auth/auth.controllers.js";

const registerRouter = Router();
const loginRouter = Router();
const authRouter = Router();

authRouter.route("/register").post(registerController);

authRouter.route("/login").post(loginController);

export { authRouter };
