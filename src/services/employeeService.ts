
import { Employee } from "@prisma/client";
import { departmentRepository, employeeRepository } from "../repositories";
import { conflictError } from "../error/conflictError";


export type CreateEmployeeParams = Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>

export async function createEmployee(data: CreateEmployeeParams) {
    const { cpf, departmentId } = data
    const employee = await employeeRepository.findEmployeeByCPF(cpf)
    if (employee) throw conflictError('CPF already registered')
    const department = await departmentRepository.findDepartmentById(departmentId)
    if (!department) throw conflictError('Department is not registered in the database')
    return employeeRepository.create(data)
}

export async function findEmployees(name: string) {
    return employeeRepository.findEmployees(name)
}

export const employeeService = { createEmployee, findEmployees }