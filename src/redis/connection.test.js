import { redis } from "./connection"
import { createClient } from 'redis'

jest.mock('redis')
const mockClient = { 
    connect: jest.fn(),
    on: jest.fn()
}
createClient.mockReturnValue(mockClient)

describe('RedisConnection', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('startConnection()', () => {
        it('should create a new connection with details provided by environment variables', () => {
            process.env.REDIS_URL = 'redis://testhost:1234'

            redis.startConnection()
            expect(createClient).toHaveBeenCalledTimes(1)
            expect(createClient).toHaveBeenCalledWith({ url: 'redis://testhost:1234' })
        })

        it('should setup a handler for the error event', () => {
            redis.startConnection()
            expect(mockClient.on).toHaveBeenCalledTimes(1)
        })

        it('should connect to the newly created connection', () => {
            redis.startConnection()
            expect(mockClient.connect).toHaveBeenCalledTimes(1)
        })
    })

    describe('getConnection()', () => {
        it('should return the connection', () => {
            redis.startConnection()
            const result = redis.getConnection()
            expect(result).toBe(mockClient)
        })
    })
})
