import { Database } from "./db/connection.js"

export default class Routes {
    static apply(app) {
        app.get('/items', async (req, res) => {
            const result = await new Promise((resolve, reject) => {
                Database.getConnection().query('SELECT * FROM items', (err, data) => {
                    if (err) reject(err)
                    resolve(data)
                })
            })
            res.send(result)
        })

        app.get('/categories', async (req, res) => {
            const result = await new Promise((resolve, reject) => {
                Database.getConnection().query('SELECT * FROM category', (err, data) => {
                    if (err) reject(err)
                    resolve(data)
                })
            })
            res.send(result)
        })
    }
}
