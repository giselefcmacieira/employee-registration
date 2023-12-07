import express, { Express } from 'express'
import cors from 'cors'
import { connectDb, disconnectDB } from './config/database';
import { departmentRouter, employeesRouter } from './routers';
import { handleApplicationErrors } from './midllewares';

const app = express()

app
    .use(cors())
    .use(express.json())
    .get('/health', (_req, res) => res.send('OK!'))
    .use('/employees', employeesRouter)
    .use('/departments', departmentRouter)
    .use(handleApplicationErrors)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app