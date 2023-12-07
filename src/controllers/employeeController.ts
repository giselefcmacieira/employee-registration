import { Request, Response } from "express";
import httpStatus from "http-status";
import { employeeService } from "../services";

export async function postEmployee(req: Request, res: Response) {

    const employee = await employeeService.createEmployee(req.body)

    return res.status(httpStatus.CREATED).send(employee)
}

export async function getEmployees(req: Request, res: Response) {
    const { name } = req.params
    const employees = await employeeService.findEmployees(name)
    return res.status(httpStatus.OK).send(employees)
}