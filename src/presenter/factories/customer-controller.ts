import { CreateCustomer, FindCustomer } from "../../application/use-cases";
import {
  CreateCustomerController,
  FindCustomerController,
} from "../controllers";

const createCustomer = new CreateCustomer();
const findCustomer = new FindCustomer();

const createCustomerController = new CreateCustomerController(createCustomer);
const findCustomerController = new FindCustomerController(findCustomer);

export { createCustomerController, findCustomerController };
