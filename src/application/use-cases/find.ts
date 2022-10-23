import { IUseCase } from "common";
import { FindCustomerRequest, FindCustomerResponse } from "domain/dtos";

class FindCustomer
  implements IUseCase<FindCustomerRequest, FindCustomerResponse>
{
  async execute(payload: FindCustomerRequest) {
    return Promise.resolve({
      id: "1",
      email: "email@email.com",
    });
  }
}

export { FindCustomer };
