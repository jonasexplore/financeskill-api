import { IUseCase } from "common";
import { CreateCustomerRequest } from "domain/dtos";

class CreateCustomer implements IUseCase<CreateCustomerRequest> {
  async execute(payload: CreateCustomerRequest): Promise<void> {
    console.log(payload);
  }
}

export { CreateCustomer };
