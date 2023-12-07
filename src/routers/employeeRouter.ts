import { Router } from "express";
import { validateBody } from "../midllewares";
import { createEmployeeSchema } from "../schemas";
import { getEmployees, postEmployee } from "../controllers/employeeController";


const employeesRouter = Router()

employeesRouter
    .post('/', validateBody(createEmployeeSchema), postEmployee)
    .get('/:name', getEmployees)

export { employeesRouter }