import { Department, Prisma } from "@prisma/client";
import { prisma } from "../config/database";


async function create(data: Prisma.DepartmentCreateInput): Promise<Department> {
    return prisma.department.create({
        data
    })
}

async function findDepartmentById(id: number): Promise<Department> {
    return prisma.department.findUnique({
        where: { id }
    })
}

async function findDepartmentByName(name: string) {
    return prisma.department.findFirst({
        where: { name }
    })
}

async function findAllDepartments(): Promise<Department[]> {
    return prisma.department.findMany({})
}

export const departmentRepository = { create, findDepartmentById, findDepartmentByName, findAllDepartments }