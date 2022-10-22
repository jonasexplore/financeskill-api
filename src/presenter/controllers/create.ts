import { Request, Response } from "express";

import { CreateCustomer } from "../../application/use-cases";
import { HTTP_CODES } from "../../common";

class CreateCustomerController {
  constructor(private readonly createCustomer: CreateCustomer) {}

  async handle(request: Request, response: Response) {
    try {
      const { email } = request.body;
      ("");
      await this.createCustomer.execute({ email });

      return response.sendStatus(HTTP_CODES.NO_CONTENT);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(HTTP_CODES.BAD_REQUEST).json({
          error: error.message,
        });
      }

      return response.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({
        error: "Internal server error",
      });
    }
  }
}

export { CreateCustomerController };
