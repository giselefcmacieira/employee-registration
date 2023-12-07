import { postEmployee } from "@/controllers/employeeController";
import { validateBody } from "@/midllewares/validation-midlleware";
import { createEmployeeSchema } from "@/schemas";
import { Router } from "express";


const employeesRouter = Router()

employeesRouter
    .post('/', validateBody(createEmployeeSchema), postEmployee)

export { employeesRouter }