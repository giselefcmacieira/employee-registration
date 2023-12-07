import { Router } from "express";
import { postDepartment } from "../controllers/departmentController";


const departmentRouter = Router()

departmentRouter
    .post('/', postDepartment)

export { departmentRouter }