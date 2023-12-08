import { Request, Response } from "express";
import httpStatus from "http-status";
import { employeeService } from "../services";

export async function postEmployee(req: Request, res: Response) {

    const employee = await employeeService.createEmployee(req.body)

    return res.status(httpStatus.CREATED).send(employee)
}

export async function getEmployees(req: Request, res: Response) {
    const employees = await employeeService.findEmployees(req.query)
    return res.status(httpStatus.OK).send(employees)
}

export async function putEmployees(req: Request, res: Response) {
    const id = Number(req.params.id)
    const employee = await employeeService.updateEmployee(id, req.body)
    return res.status(httpStatus.OK).send(employee)
}

export async function deleteEmployee(req: Request, res: Response) {
    const id = Number(req.params.id)
    const employee = await employeeService.deleteEmployee(id)
    return res.status(httpStatus.OK).send(employee)
}