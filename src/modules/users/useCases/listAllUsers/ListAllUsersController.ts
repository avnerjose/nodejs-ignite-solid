import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    const { user_id } = req.headers;

    try {
      const response = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return res.json(response);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
