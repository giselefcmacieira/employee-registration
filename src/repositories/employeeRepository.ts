import { prisma } from "@/config/database";
import { Employee, Prisma } from "@prisma/client";


async function create(data: Prisma.EmployeeUncheckedCreateInput): Promise<Employee> {
    return prisma.employee.create({
        data
    })
}

export const employeeRepository = { create }