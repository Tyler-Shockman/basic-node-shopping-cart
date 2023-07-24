import { createClient } from "redis"

class RedisConnection {
    startConnection() {
        console.log('Starting redis connection...')
        this.connection = createClient({ url: process.env.REDIS_URL || 'localhost:6379' })
        this.connection.on('error', err => console.error('Redis has experiencd an error.', err))
        this.connection.connect()
        console.log('...redis connection started.')
    }

    getConnection() {
        return this.connection
    }
}

export const redis = new RedisConnection()
