import { ApplicationError } from "../protocols";

export function conflictError(details: string): ApplicationError {
    return {
        name: 'ConflictError',
        message: `Conflict error: ${details}`,
    };
}