import { Department, Prisma } from "@prisma/client";
import { prisma } from "../config/database";


async function create(data: Prisma.DepartmentCreateInput): Promise<Department> {
    return prisma.department.create({
        data
    })
}

export const departmentRepository = { create }