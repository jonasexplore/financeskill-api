import { CreateCustomer } from "../../application/use-cases";
import { CreateCustomerController } from "../controllers";

const createCustomer = new CreateCustomer();

const createCustomerController = new CreateCustomerController(createCustomer);

export { createCustomerController };
