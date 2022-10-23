import { Router } from "express";

import {
  createCustomerController,
  findCustomerController,
} from "../../presenter/factories";

const router = Router();

router.post("/customers", createCustomerController.handle);
router.get("/customers", findCustomerController.handle);

export { router };
