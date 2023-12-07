import { Department } from "@prisma/client";
import { departmentRepository } from "../repositories";

export type CreateDepartment = Pick<Department, 'name'>

export async function createDepartment(data: CreateDepartment) {
    return departmentRepository.create(data)
}

export const departmentService = { createDepartment }