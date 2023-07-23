import { Database } from "./connection"
import mysql from 'mysql'

jest.mock('mysql')
const mockConnection = { connect: jest.fn() }
mysql.createConnection.mockReturnValue(mockConnection)

describe('DBConnection', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('startConnection()', () => {
        it('should create a new connection with details provided by environment variables', () => {
            process.env.DB_HOST = 'testhost'
            process.env.DB_PORT = '90210'
            process.env.DB_USER = 'testuser'
            process.env.DB_PASSWORD = 'testpassword'
            process.env.DB_NAME = 'testname'

            Database.startConnection()
            expect(mysql.createConnection).toHaveBeenCalledTimes(1)
            expect(mysql.createConnection).toHaveBeenCalledWith(
                {
                    host: 'testhost',
                    port: '90210',
                    user: 'testuser',
                    password: 'testpassword',
                    database: 'testname'
                }
            )
        })

        it('should connect to the newly created connection', () => {
            Database.startConnection()
            expect(mockConnection.connect).toHaveBeenCalledTimes(1)
        })
    })

    describe('getConnection()', () => {
        it('should return the connection', () => {
            Database.startConnection()
            const result = Database.getConnection()
            expect(result).toBe(mockConnection)
        })
    })
})
