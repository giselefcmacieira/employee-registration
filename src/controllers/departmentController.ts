import { Request, Response } from "express";
import httpStatus from "http-status";
import { departmentService } from "../services";


export async function postDepartment(req: Request, res: Response) {
    const department = await departmentService.createDepartment(req.body)

    return res.status(httpStatus.CREATED).send(department)
}

export async function getDepartments(req: Request, res: Response) {
    const departments = await departmentService.findDepartments()

    return res.status(httpStatus.OK).send(departments)
}