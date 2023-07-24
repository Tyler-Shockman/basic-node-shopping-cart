import { createClient } from "redis"

class RedisConnection {
    startConnection() {
        this.connection = createClient({ url: process.env.REDIS_URL || 'localhost:6379' })
        this.connection.on('error', err => console.error('Redis has experiencd an error.', err))
        this.connection.connect()
    }

    getConnection() {
        return this.connection
    }
}

export const Redis = new RedisConnection()
