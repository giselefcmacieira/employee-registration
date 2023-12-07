
import { Request, Response } from "express";
import httpStatus from "http-status";
import { departmentService } from "../services";


export async function postDepartment(req: Request, res: Response) {
    const department = await departmentService.createDepartment(req.body)

    return res.status(httpStatus.CREATED).send(department)
}