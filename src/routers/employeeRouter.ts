import { Router } from "express";
import { validateBody, validateParams } from "../midllewares";
import { createEmployeeSchema, findEmployeesSchema, updateEmployeeSchema } from "../schemas";
import { deleteEmployee, getEmployees, postEmployee, putEmployees } from "../controllers/employeeController";


const employeesRouter = Router()

employeesRouter
    .post('/', validateBody(createEmployeeSchema), postEmployee)
    .get('/', getEmployees)
    .put('/:id', validateBody(updateEmployeeSchema), putEmployees)
    .delete('/:id', deleteEmployee)

export { employeesRouter }