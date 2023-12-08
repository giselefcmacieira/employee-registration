import Joi from "joi";
import { CreateEmployeeParams } from "../services";
import { UpdateEmployee } from "@/repositories";

export const createEmployeeSchema = Joi.object<CreateEmployeeParams>({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).required(),
    salary: Joi.number().integer().required(),
    dateOfBirth: Joi.date().required(),
    departmentId: Joi.number().integer().required()
})

export type FindEmployees = {
    name: string
}

export const findEmployeesSchema = Joi.object<FindEmployees>({
    name: Joi.string().required()
})

export const updateEmployeeSchema = Joi.object<UpdateEmployee>({
    cpf: Joi.string().length(11),
    dateOfBirth: Joi.date(),
    departmentId: Joi.number().integer(),
    name: Joi.string(),
    salary: Joi.number().integer()
})