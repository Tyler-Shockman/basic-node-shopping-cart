import dotenv from 'dotenv'
import express from 'express';
import { database } from './db/connection.js';
import { redis } from './redis/connection.js';
import Routes, { routes } from './api/routes.js';

dotenv.config()
const port = process.env.PORT || 3000

function startApp() {
    const app = express()
    database.startConnection()
    redis.startConnection()
    routes.applyAll(app)
    
    app.listen(port, () => {
        console.log(`App listening on port ${port}.`)
    })
}

startApp()