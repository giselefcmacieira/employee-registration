
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

async function findAllEmployees() {
    return prisma.employee.findMany({
        select: {
            id: true,
            name: true,
            salary: true,
            cpf: true,
            dateOfBirth: true,
            createdAt: true,
            updatedAt: true,
            Department: true
        },
        orderBy: { name: 'asc' }
    })
}

async function findEmployeesByName(name: string) {
    return prisma.employee.findMany({
        where: {
            name: {
                contains: name.toLowerCase(),
            }
        },
        select: {
            id: true,
            name: true,
            salary: true,
            cpf: true,
            dateOfBirth: true,
            createdAt: true,
            updatedAt: true,
            Department: true
        },
        orderBy: { name: 'asc' }
    })
}

async function findEmployeesByDepartmentId(departmentId: number) {
    return prisma.employee.findMany({
        where: {
            departmentId: Number(departmentId)
        },
        select: {
            id: true,
            name: true,
            salary: true,
            cpf: true,
            dateOfBirth: true,
            createdAt: true,
            updatedAt: true,
            Department: true
        },
        orderBy: { name: 'asc' }
    })
}

async function findEmployeesByNameAndDepartmentId(name: string, departmentId: number) {
    return prisma.employee.findMany({
        where: {
            AND: [{
                name: {
                    contains: name.toLowerCase(),
                },
                departmentId: Number(departmentId)
            }]
        },
        select: {
            id: true,
            name: true,
            salary: true,
            cpf: true,
            dateOfBirth: true,
            createdAt: true,
            updatedAt: true,
            Department: true
        },
        orderBy: { name: 'asc' }
    })
}

export type UpdateEmployee = {
    name?: string;
    cpf?: string;
    salary?: number;
    dateOfBirth?: Date;
    departmentId?: number;
}

async function updateEmployee(id: number, data: UpdateEmployee): Promise<Employee> {
    return prisma.employee.update({
        where: { id },
        data
    })
}

async function deleteEmployee(id: number): Promise<Employee> {
    return prisma.employee.delete({
        where: { id }
    })
}

export const employeeRepository = {
    create,
    findEmployeeByCPF,
    findAllEmployees,
    findEmployeesByName,
    findEmployeesByDepartmentId,
    findEmployeesByNameAndDepartmentId,
    updateEmployee,
    deleteEmployee
}