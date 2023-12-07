
import Joi from "joi";
import { CreateEmployeeParams } from "../services";


export const createEmployeeSchema = Joi.object<CreateEmployeeParams>({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).required(),
    salary: Joi.number().integer().required(),
    dateOfBirth: Joi.date().required(),
    departmentId: Joi.number().integer().required()
})