import { Router } from "express";
import { createUser, Login, getUsers } from "../controllers/controllers";

const router = Router();

router.get("/users", getUsers);

router.post("/users/auth", Login);

router.post("/users/create", createUser);

// router.post("/users", createUser);

export default router;
