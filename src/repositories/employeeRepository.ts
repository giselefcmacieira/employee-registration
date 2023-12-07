
import { Employee, Prisma } from "@prisma/client";
import { prisma } from "../config/database";


async function create(data: Prisma.EmployeeUncheckedCreateInput): Promise<Employee> {
    return prisma.employee.create({
        data
    })
}

async function findEmployeeByCPF(cpf: string): Promise<Employee> {
    return prisma.employee.findUnique({
        where: { cpf }
    })
}

export const employeeRepository = { create, findEmployeeByCPF }