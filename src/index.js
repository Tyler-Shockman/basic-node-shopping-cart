import dotenv from 'dotenv'
import express from 'express';
import Routes from './routes.js';

dotenv.config()
const port = process.env.PORT || 3000

function startApp() {
    const app = express()

    Routes.apply(app)
    
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}

startApp()