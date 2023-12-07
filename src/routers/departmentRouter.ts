import { Router } from "express";
import { getDepartments, postDepartment } from "../controllers/departmentController";
import { validateBody } from "../midllewares";
import { createDepartmentSchema } from "../schemas/departmentSchema";


const departmentRouter = Router()

departmentRouter
    .post('/', validateBody(createDepartmentSchema), postDepartment)
    .get('/', getDepartments)

export { departmentRouter }