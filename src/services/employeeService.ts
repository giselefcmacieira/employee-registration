
import { Employee } from "@prisma/client";
import { UpdateEmployee, departmentRepository, employeeRepository } from "../repositories";
import { conflictError } from "../error/conflictError";
import { invalidDataError } from "../error";


export type CreateEmployeeParams = Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>

export async function createEmployee(data: CreateEmployeeParams) {
    const { salary, dateOfBirth, cpf, departmentId } = data
    const name = data.name.toLocaleLowerCase()
    const employee = await employeeRepository.findEmployeeByCPF(cpf)
    if (employee) throw conflictError('CPF already registered')
    const department = await departmentRepository.findDepartmentById(Number(departmentId))
    if (!department) throw conflictError('Department is not registered in the database')
    return employeeRepository.create({
        name,
        cpf,
        dateOfBirth,
        salary: Number(salary),
        departmentId: Number(departmentId)
    })
}

export type EmployeeInfo = {
    name?: string;
    departmentId?: number
}

export async function findEmployees(data: EmployeeInfo) {

    if (!data.name && !data.departmentId) return employeeRepository.findAllEmployees()
    if (data.name && !isNaN(Number(data.name))) throw invalidDataError('name should be a string')
    if (data.departmentId && isNaN(Number(data.departmentId))) throw invalidDataError('departmentId should be a number')
    if (data.name && !data.departmentId) return employeeRepository.findEmployeesByName(data.name)
    if (!data.name && data.departmentId) return employeeRepository.findEmployeesByDepartmentId(data.departmentId)
    return employeeRepository.findEmployeesByNameAndDepartmentId(data.name, data.departmentId)
}

export async function updateEmployee(id: number, data: UpdateEmployee) {
    if (isNaN(id)) throw invalidDataError('Employee id should be a number')
    return employeeRepository.updateEmployee(Number(id), data)
}

export async function deleteEmployee(id: number) {
    return employeeRepository.deleteEmployee(id)
}

export const employeeService = { createEmployee, findEmployees, updateEmployee, deleteEmployee }