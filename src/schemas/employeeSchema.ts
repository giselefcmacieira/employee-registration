import { CreateEmployeeParams } from "@/services";
import Joi from "joi";


export const createEmployeeSchema = Joi.object<CreateEmployeeParams>({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).required(),
    salary: Joi.number().integer().required(),
    dateOfBirth: Joi.date().required(),
    departmentId: Joi.number().integer().required()
})