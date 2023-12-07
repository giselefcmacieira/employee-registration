import { Department } from "@prisma/client";
import { departmentRepository } from "../repositories";
import { conflictError } from "../error/conflictError";

export type CreateDepartment = Pick<Department, 'name'>

export async function createDepartment(data: CreateDepartment) {
    const department = await departmentRepository.findDepartmentByName(data.name)
    if (department) throw conflictError(`department ${data.name} is already registered`)
    return departmentRepository.create(data)
}

export async function findDepartments() {
    return departmentRepository.findAllDepartments()
}

export const departmentService = { createDepartment, findDepartments }