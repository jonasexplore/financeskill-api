import { Router } from "express";

import { createCustomerController } from "../../presenter/factories";

const router = Router();

router.post("/customers", createCustomerController.handle);

export { router };
