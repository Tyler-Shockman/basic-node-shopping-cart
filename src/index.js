import dotenv from 'dotenv'
import express from 'express';
import { database } from './db/connection.js';
import { redis } from './redis/connection.js';
import { routes } from './api/routes.js';
import { errorHandler } from './api/error-handler.js';
import { baseLogger } from './logging/base-logger.js';

dotenv.config()
const port = process.env.PORT || 3000

function startApp() {
    const app = express()
    app.use(routes)
    app.use(errorHandler)
    database.startConnection()
    redis.startConnection()
    app.listen(port, () => baseLogger.log(`App listening on port ${port}.`))
}

startApp()
