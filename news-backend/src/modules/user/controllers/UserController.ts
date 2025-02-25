import { Request, Response, NextFunction } from "express";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

export class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      const newUser = new User(email, name);
      await createUserUseCase.execute(newUser);
      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      if (error instanceof Error) {
        next(error);
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: "An unknown error occurred" });
    }
  }
}
