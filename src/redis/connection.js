import { createClient } from "redis"
import { baseLogger } from "../logging/base-logger"

class RedisConnection {
    startConnection() {
        baseLogger.log('Starting redis connection...')
        this.connection = createClient({ url: process.env.REDIS_URL || 'localhost:6379' })
        this.connection.on('error', err => baseLogger.error('Redis has experiencd an error.', err))
        this.connection.connect()
        baseLogger.log('...redis connection started.')
    }

    getConnection() {
        return this.connection
    }
}

export const redis = new RedisConnection()
