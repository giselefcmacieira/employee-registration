
import { Employee, Prisma } from "@prisma/client";
import { prisma } from "../config/database";


async function create(data: Prisma.EmployeeUncheckedCreateInput): Promise<Employee> {
    return prisma.employee.create({
        data
    })
}

export const employeeRepository = { create }