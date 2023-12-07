import { CreateDepartment } from "@/services";
import Joi from "joi";

export const createDepartmentSchema = Joi.object<CreateDepartment>({
    name: Joi.string().required(),
})