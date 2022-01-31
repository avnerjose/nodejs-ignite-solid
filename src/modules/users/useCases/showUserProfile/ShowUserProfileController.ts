import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(req: Request, res: Response): Response {
    const { user_id } = req.params;

    try {
      const response = this.showUserProfileUseCase.execute({ user_id });
      return res.json(response);
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
