import dotenv from 'dotenv'
import express from 'express';
import { Database } from './db/connection.js';
import { Redis } from './redis/connection.js';
import Routes from './api/routes.js';

dotenv.config()
const port = process.env.PORT || 3000

function startApp() {
    const app = express()
    Database.startConnection()
    Redis.startConnection()

    Routes.applyAll(app)
    
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}

startApp()