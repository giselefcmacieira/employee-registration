
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

async function findEmployees(name: string): Promise<Employee[]> {
    return prisma.employee.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: name.toUpperCase(),
                    },
                },
                {
                    name: {
                        contains: name.toLowerCase(),
                    },
                },
            ]
        }
    })
}

/* where: {
    OR: [
        {
            nome: {
                contains: termoPesquisa,
            },
        },
        {
            email: {
                contains: termoPesquisa,
            },
        },
    ],
  }, */

export const employeeRepository = { create, findEmployeeByCPF, findEmployees }