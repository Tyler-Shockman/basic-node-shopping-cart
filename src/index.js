import dotenv from 'dotenv'
import express from 'express';
import { database } from './db/connection.js';
import { redis } from './redis/connection.js';
import { routes } from './api/routes.js';

dotenv.config()
const port = process.env.PORT || 3000

function startApp() {
    const app = express()
    app.use(routes)
    app.use((error, req, res, next) => {
        console.error(error)
        res.status(500).send()
    })
    database.startConnection()
    redis.startConnection()
    app.listen(port, () => console.log(`App listening on port ${port}.`))
}

startApp()
