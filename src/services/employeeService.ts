import { employeeRepository } from "@/repositories";
import { Employee } from "@prisma/client";


export type CreateEmployeeParams = Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>

export async function createEmployee(data: CreateEmployeeParams) {
    return employeeRepository.create(data)
}

export const employeeService = { createEmployee }