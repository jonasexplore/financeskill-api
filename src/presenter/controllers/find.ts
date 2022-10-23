import { Request, Response } from "express";

import { FindCustomer } from "../../application/use-cases";
import { HTTP_CODES } from "../../common";

class FindCustomerController {
  constructor(private findCustomer: FindCustomer) {
    this.handle = this.handle.bind(this);
  }

  async handle(request: Request, response: Response) {
    try {
      const email = request.query.email as string | undefined;

      if (!email) {
        return response.status(HTTP_CODES.BAD_REQUEST).json({
          error: "Email is required",
        });
      }

      const customer = await this.findCustomer.execute({ email });

      return response.status(HTTP_CODES.OK).json(customer);
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

export { FindCustomerController };
