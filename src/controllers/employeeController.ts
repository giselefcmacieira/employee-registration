import { employeeService } from "@/services/employeeService";
import { Request, Response } from "express";
import httpStatus from "http-status";


export async function postEmployee(req: Request, res: Response) {
    //const {name, cpf, salary, dateOfBirth, departmentId} = req.body

    const employee = await employeeService.createEmployee(req.body)

    return res.status(httpStatus.CREATED).send(employee)
}