import mysql from 'mysql'

class DBConnection {
    startConnection() {
        console.log('Starting database connection...')
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || '3306',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'test'
        })
        this.connection.connect()
        console.log('...database connection started.')
    }

    getConnection() {
        return this.connection
    }
}

export const database = new DBConnection()
